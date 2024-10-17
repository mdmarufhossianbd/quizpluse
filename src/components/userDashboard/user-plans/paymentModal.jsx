import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { IconLoader2, IconXboxXFilled } from '@tabler/icons-react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';

// Load your Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PAYMENT_P_KEY);

const PaymentModal = ({ isOpen, onClose, plan }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { data } = useSession();
    const [clientSecret, setClientSecret] = useState();
    const router = useRouter()
    const price = plan.price;
    const email = data?.user?.email;
    
    useEffect(() => {
        axios.post('/api/v1/payment/make-payment', { price })
            .then(res => {
                if (res.data.success) {
                    setClientSecret(res.data.clientSecret)
                } else {
                    toast.error('Something went wrong. Please try again later')
                }
            })
    }, [email, price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setLoading(false);
            return;
        }

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            return
        }
        try {
            // create payment method
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                setError(error.message);
                setLoading(false);
            } else {                
                // confirm payment
                const card = paymentMethod.card
                const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: cardElement,
                        billing_details: {
                            name: data?.user?.name || 'anonymous',
                            email: data?.user?.email || 'anonymous'
                        }
                    }
                })
                if (error) {
                    setLoading(false);
                    setError(error.message);                    
                } else {
                    // save details in db                   
                    if (paymentIntent.status === 'succeeded') {   
                        const paymentInfo = {
                            paymentTime : Date.now(),
                            transactionId: paymentIntent.id,
                            price,
                            cardDetails: card,
                            packageName: plan.name,
                            packageTitle: plan.title,
                            name : data?.user?.name,
                            email : data?.user?.email,
                            status: 'succeeded'
                        }
                        axios.post('/api/v1/payment/store-payment-info', paymentInfo)
                        .then(res => {                            
                            if(res.data.success){
                                toast.success('Payment Success')
                                setLoading(false);
                                onClose(); 
                                router.push('/user-dashboard/thank-you')
                            }
                        })
                    }
                }
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-80 z-50">
            <Toaster position='top-center' richColors />
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-0 right-0 md:right-5 mt-4 text-white  p-1 px-2">
                    <IconXboxXFilled className='text-red-600' />
                </button>
                <h2 className="text-2xl font-semibold mb-4">Upgrade to {plan.title} Plan</h2>
                <p className="mb-4">Complete your payment to access premium features.</p>

                <form onSubmit={handleSubmit}>
                    <CardElement className="p-3 border border-gray-300 rounded-lg" />
                    {error && <p className="text-red-600 mt-2">{error}</p>}

                    <button
                        type="submit"
                        className={`mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition-all duration-300 ${loading && 'cursor-not-allowed'}`}
                        disabled={loading}
                    >
                        {loading ? <p className='w-full flex items-center justify-center gap-2'><IconLoader2 stroke={2} className='animate-spin' />Processing...</p> : 'Pay Now'}
                    </button>
                </form>
            </div>
        </div>
    );
};

// Wrap PaymentModal inside Elements provider for Stripe
const PaymentModalWrapper = (props) => (
    <Elements stripe={stripePromise}>
        <PaymentModal {...props} />
    </Elements>
);

export default PaymentModalWrapper;
