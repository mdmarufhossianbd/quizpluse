"use client";

import { useState } from 'react';
import { IconArrowForwardUp } from '@tabler/icons-react';
import './style.css';
import PaymentModalWrapper from './paymentModal';

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
          ${plan.name === 'starter' && 'bg-[#3a005e] font-bold'}`}
        >
          {plan.name === 'starter' && <p className="uppercase">Recommended</p>}
        </div>

        {/* Plan Body */}
        <div
          className={`px-6 py-8 bg-gradient-to-t from-gray-100 to-white 
          hover:shadow-xl hover:from-gray-200 transition-all duration-300 hover:cursor-pointer 
          ${plan.name === 'starter' ? 'border-2 border-[#5C0096] bg-gradient-to-t from-[#2f55efc4] to-[#ba66e7c5] text-white' : ''}`}
        >
          <p className="text-sm text-gray-500 uppercase">Basic Plan</p>
          <h2 className="text-5xl my-3 font-semibold text-gray-900">
            Free
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita
            quia impedit ex sequi cupiditate minima, facilis consectetur magnam modi?
          </p>

          <hr className="my-6 border-gray-300" />

          {/* Features */}
          <ul className="space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 py-1 group text-gray-800">
                <IconArrowForwardUp stroke={1} className="group-hover:ml-1 transition-transform duration-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Upgrade Button */}
          <div className="flex justify-center mt-6">
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
