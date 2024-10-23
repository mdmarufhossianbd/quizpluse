import { IconCreditCard } from '@tabler/icons-react'; // Importing a payment-related icon
import Link from 'next/link'; // If using Next.js for navigation

const PaymentAd = () => {
    return (
        <section className="bg-gradient-to-r from-[#595AED] via-purple-800 to-[#595AED] text-white py-16">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight flex flex-col">
                    <span>
                        Unlock Premium Features
                    </span>
                    <span className='md:my-3'>
                        with
                    </span>
                    <span>
                        Our Membership Plans
                    </span>
                </h2>
                <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-4xl mx-auto">
                    Elevate your learning experience with exclusive quizzes, advanced analytics, and much more. Choose the plan that’s right for you and start your journey today.
                </p>

                {/* Ad Design */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {/* Basic Plan */}
                    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl w-full max-w-xs hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
                        <p className="my-4">Free - Limited access to quizzes with essential features.</p>
                        <span className="block text-indigo-600 font-bold">No Payment Required</span>
                    </div>

                    {/* Starter Plan */}
                    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl w-full max-w-xs hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">Starter Plan</h3>
                        <p className="my-4">$29/month - Unlock more quizzes and advanced features.</p>
                        <span className="block text-indigo-600 font-bold">Monthly Subscription</span>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl w-full max-w-xs hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                        <p className="my-4">$249/year - Get unlimited access with premium features.</p>
                        <span className="block text-indigo-600 font-bold">Annual Subscription</span>
                    </div>
                </div>

                {/* Navigation Button */}
                <div className="mt-10">
                    <Link href="/user-dashboard/plans">
                        <button className="inline-flex items-center bg-white hover:bg-[#5C0096] text-[#5C0096] hover:text-white border border-[#5C0096] hover:border-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-transform duration-400 hover:scale-105">
                            <IconCreditCard className="mr-2" />
                            Explore Membership Plans
                            {/* <IconArrowForwardUp className="ml-2" /> */}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PaymentAd;
