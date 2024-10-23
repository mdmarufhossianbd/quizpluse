import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaQ = () => {
  return (
    <div className="w-full max-w-[90%] md:max-w-[95%] lg:w-[1440px] mx-auto px-4 py-8">
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-semibold py-6">
        FAQ
      </h1>
      <Accordion
        type="single"
        collapsible
        className="bg-purple-50 p-6 rounded-xl"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl font-semibold'>Is it free?</AccordionTrigger>
          <AccordionContent className='text-lg'>
            Yes! But the free version of the quiz app offers limited quizzes and includes ads, providing only basic features. In contrast, the paid version allows unlimited access to quizzes, removes ads, and includes additional features like offline mode and special challenges.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='text-xl font-semibold'>What is the main theme?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          Main theme of a Quiz Pulse is to provide an engaging platform for learning and testing knowledge through interactive quizzes. It focuses on entertainment, education, and self-assessment, allowing users to challenge themselves or compete with others while gaining knowledge on various topics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='text-xl font-semibold'>Is it profitable?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          Yes, the quiz app can be profitable. Revenue can come from several sources, such as in-app ads, offering a paid version with additional features, or in-app purchases for extra content or lives. Engaging content and a good user experience help retain users, which boosts profitability through continued usage, upgrades, or ad views.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaQ;
