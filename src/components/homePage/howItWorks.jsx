
import { BsTrophy } from "react-icons/bs";
import { FaRegHandshake, FaRegUser } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

const HowItWorks = () => {
  const cards = [
    {
      icon: <FaRegHandshake size={80} />,
      title: "1. Join",
      description:
        "You can create an account by clicking the Sign Up button on the homepage. You will need to provide your email address, create a password, and verify your email to complete the process. That's how you join",
    },
    {
      icon: <FaRegUser size={80} />,
      title: "2. Participate",
      description:
        "When the quiz starts, answer questions carefully, manage your time, and submit your answers.Check results for feedback, engage in discussions with other participants, and celebrate your involvement.",
    },
    {
      icon: <BsTrophy size={80} />,
      title: "3. Rewards",
      description:
        "Users can earn rewards by achieving high scores on quizzes. Incentives may include points, badges, gift cards, or exclusive content access.",
    },
    {
      icon: <PiCertificateBold size={80} />,
      title: "4. Certification",
      description:
        "Certification in Quiz pulse applications adds significant value by validating users' knowledge and skills, motivating them to learn, and enhancing their career prospects.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-semibold py-10 ">
        How it Works
      </h1>
      <div className="py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-[#595AED] to-purple-800 hover:from-gray-800 hover:to-purple-800 p-10 shadow-lg text-start rounded-lg transition duration-200 ease-in-out hover:bg- hover:scale-105"
              style={{ minHeight: "300px" }}
            >
              <div className="text-white mb-4 flex justify-center items-center">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-gray-200 text-justify group-hover:text-white">
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
