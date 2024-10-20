import React from "react";
import { FaClipboard, FaHeadset, FaMobileAlt, FaRocket } from "react-icons/fa";

const HowItWorks = () => {
  const cards = [
    {
      icon: <FaRocket size={40} />,
      title: "Fast Performance",
      description:
        "Optimized for a smaller build size, faster dev compilation and dozens of other improvements.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Perfect Responsive",
      description:
        "Our template is full perfect for all devices. You can visit our template on any device easily.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "Fast & Friendly Support",
      description:
        "We provide 24/7 support for all clients. You can purchase without hesitation.",
    },
    {
      icon: <FaClipboard size={40} />,
      title: "Easy to Use",
      description:
        "Create your own custom template or section by copying, pasting, and assembling.",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-semibold py-6">
        How it Works
      </h1>
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#7534f7] p-10 shadow-lg text-start rounded-lg transition duration-200 ease-in-out hover:bg-gray-800 hover:scale-105"
              style={{ minHeight: "300px" }}
            >
              <div className="text-white mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-gray-200 group-hover:text-white text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
