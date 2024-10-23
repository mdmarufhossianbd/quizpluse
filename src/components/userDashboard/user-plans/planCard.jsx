"use client";

import { IconArrowForwardUp } from '@tabler/icons-react';
import { useState } from 'react';
import PaymentModalWrapper from './paymentModal';
import './style.css';

const PlanCard = ({ plan }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal

  const handleUpgrade = () => {
    setIsModalOpen(true); // Open the modal when the "Upgrade Now" button is clicked
  };

  return (
    <>
      <div className="shadow-lg rounded-md overflow-hidden border border-gray-200">
        {/* Plan Header */}
        <div
          className={`h-14 flex justify-center items-center rounded-t-md text-white 
          ${plan.name === 'starter' && 'bg-gradient-to-r from-purple-600 to-indigo-600 font-bold'}`}
        >
          {plan.name === 'starter' && <p className="uppercase">Recommended</p>}
        </div>

        {/* Plan Body */}
        <div
          className={`px-6 py-8 hover:bg-gradient-to-t from-[#f2e9f1] to-white ${plan.name === 'starter' ? 'border-2 border-[#5c009693] bg-gradient-to-t from-[#f2e9f1] to-white text-white' : ''}`}
        >
          <p className="text-sm text-gray-500 uppercase">{plan.title} Plan</p>
          {
            plan.name === 'basic' ? <h2 className="text-5xl my-3 font-semibold text-gray-900">
              Basic
            </h2> : plan.name === 'starter' ? <div>
              <h2 className="text-5xl my-3 font-semibold text-gray-900">
                {plan.price}$<span className='text-lg'>/Monthly</span>
              </h2>
            </div> : <div>
              <h2 className="text-5xl my-3 font-semibold text-gray-900">
                {plan.price}$<span className='text-lg'>/Life time</span>
              </h2>
            </div>
          }
          <p className="text-gray-700 leading-relaxed">
            {plan.description}
          </p>

          <hr className="my-4 border-gray-300" />

          {/* Features */}
          <ul className="space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 py-1 group text-gray-800">
                <IconArrowForwardUp stroke={1} className="group-hover:ml-1 duration-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Upgrade Button */}
          <div className="mt-5 flex justify-center">
            <button
              onClick={handleUpgrade}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isModalOpen && (
        <PaymentModalWrapper
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          plan={plan} // Passing the plan details to the modal
        />
      )}
    </>
  );
};

export default PlanCard;
