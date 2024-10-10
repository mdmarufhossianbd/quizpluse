import React from 'react';
import PlanCard from '../userDashboard/user-plans/planCard';

const UpgradePlans = () => {
  return (
    // bg-[#F2E9F1]
    <div className=' pl-6 grid md:grid-cols-3  justify-center'>
      {
        plansOfsubscriptions.subscriptions.map((plan, index) => {
          return (<PlanCard plan={plan} key={index} />);
        })
      }
    </div>
  );
}

export default UpgradePlans;

const plansOfsubscriptions = {
  "subscriptions": [
    {
      "id": 1,
      "name": "Basic",
      "price": 9.99,
      "currency": "USD",
      "duration": "1 Month",
      "description": "A starter plan for casual users looking to explore quizzes with limited features.",
      "features": [
        "Access to basic quizzes",
        "Limited quiz attempts per day",
        "Standard support",
        "No ads"
      ]
    },
    {
      "id": 2,
      "name": "Premium",
      "price": 19.99,
      "currency": "USD",
      "duration": "1 Month",
      "description": "Ideal for regular users, this plan offers full access to quizzes and additional perks.",
      "features": [
        "Access to all quizzes",
        "Unlimited quiz attempts",
        "Priority support",
        "Ad-free experience",
        "Access to premium content"
      ]
    },
    {
      "id": 3,
      "name": "Gold",
      "price": 29.99,
      "currency": "USD",
      "duration": "1 Month",
      "description": "The ultimate package with exclusive benefits and VIP support for dedicated users.",
      "features": [
        "All Premium features",
        "Personalized quiz recommendations",
        "Exclusive rewards",
        "Early access to new features",
        "VIP support"
      ]
    }
  ]
};
