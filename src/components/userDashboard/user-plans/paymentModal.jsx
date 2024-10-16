import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51PM9rAP9reZms4XZvfw3etcSIsIPU4eVEKnSybt5TZTPN1tSb8BriuwoY7koAA1GV8UzipykGiUmdw4miKNyk6m100sa2w50M2');

const PaymentModal = ({ isOpen, onClose, plan }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setLoading(false);
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const { error, paymentIntent } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                setError(error.message);
                setLoading(false);
            } else {
                console.log('Payment Successful:', paymentIntent);
                onClose(); // Close the modal after payment
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-0 right-2 md:right-5 mt-4 text-white  p-1 px-2 bg-[#5C0096] hover:bg-[#500081] rounded-full ">
                    X
                </button>
                <h2 className="text-2xl font-semibold mb-4">Upgrade to {plan.name} Plan</h2>
                <p className="mb-4">Complete your payment to access premium features.</p>

                <form onSubmit={handleSubmit}>
                    <CardElement className="p-3 border border-gray-300 rounded-lg" />
                    {error && <p className="text-red-600 mt-2">{error}</p>}

                    <button
                        type="submit"
                        className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition-all duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
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
