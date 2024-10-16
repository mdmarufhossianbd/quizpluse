import PlanCard from '../userDashboard/user-plans/planCard';

const UpgradePlans = () => {
  const plans = [
    {
      name: 'basic',
      price: 0,
      title: 'Basic',
      expiryDate: Infinity,
      duration: 'Unlimited',
      description: 'Access to a limited selection of quizzes with standard features. Ideal for casual users looking to improve their knowledge at a comfortable pace.',
      features: [
        'Access to limited quizzes(e.g., 10 quizzes per month)',
        'Basic analytics for quiz performance(e.g., score and completion time)',
        'Access to text - based quizzes only(no multimedia)',
        'Limited question types(e.g., multiple choice, true / false)',
        'Participation in public quizzes only',
        'Standard customer support(response within 48 hours)',
        'No custom quiz creation',
        'Limited quiz history tracking(e.g., last 3 quizzes)',
        'Ads displayed during quizzes',
        'Basic profile customization',
      ]
    },
    {
      name: 'starter',
      price: 29,
      title: 'Starter',
      expiryDate: 30,
      duration: 'monthly',
      description: 'Unlock more quizzes and advanced features, including timed quizzes and progress tracking. Perfect for dedicated learners seeking deeper engagement.',
      features: [
        'Access to a larger number of quizzes (e.g., 50 quizzes per month)',
        'Advanced analytics (e.g., detailed quiz breakdown)',
        'Access to multimedia quizzes (images, audio, and video)',
        'More question types (e.g., fill in the blanks, matching)',
        'Ability to create and participate in private quizzes',
        'Priority customer support (response within 24 hours)',
        'Basic custom quiz creation (up to 5 quizzes)',
        'Full quiz history tracking',
        'Option to remove ads',
        'Intermediate profile customization (themes, colors)'
      ]

    },
    {
      name: 'pro',
      price: 249,
      title: 'Pro',
      expiryDate: 365,
      duration: 'yearly',
      description: 'Enjoy unlimited access to all quizzes, premium features, and detailed analytics. Tailored for professionals or competitive learners aiming to master their skills.',
      features: [
        'Unlimited access to all quizzes',
        'Full advanced analytics with performance insights',
        'Access to all multimedia features, including timed quizzes',
        'Custom question types (create your own)',
        'Full control over private quiz creation and sharing',
        'Premium customer support (response within 12 hours)',
        'Unlimited custom quiz creation',
        'Access to advanced quiz settings (e.g., randomization, time limits)',
        'No ads at all',
        'Full profile customization with branding options'
      ]
    },
  ]
  return (
    <>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-2'>
        {
          plans.map((plan, index) => {
            return (<PlanCard plan={plan} key={index} />);
          })
        }
      </div>
    </>

  );
}

export default UpgradePlans;

const plansOfsubscriptions = {
  "subscriptions": [
    {
      "id": 1,
      "name": "",
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
