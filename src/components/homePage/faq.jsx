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
        Frequently Ask & Question
      </h1>
      <Accordion
        type="single"
        collapsible
        className="bg-purple-50 p-6 rounded-xl"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-xl font-semibold'>How do I create an account?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          You can create an account by clicking the Sign Up button on the homepage. You will need to provide your email address, create a password, and verify your email to complete the process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='text-xl font-semibold'>How do I start a new quiz?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          After logging in, go to the Quizzes section, select a quiz from the list, and click the Start Quiz button. Follow the instructions to begin.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='text-xl font-semibold'>Can I retake a quiz?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          Yes, you can retake a quiz by navigating to the Completed Quizzes section and selecting the quiz you want to retake. Some quizzes may have restrictions on the number of attempts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className='text-xl font-semibold'>How are quiz scores calculated?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          Quiz scores are calculated based on the number of correct answers. Each correct answer is worth a certain number of points, and the total score will be displayed at the end of the quiz.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className='text-xl font-semibold'>Is there a time limit for quizzes?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          Some quizzes may have a time limit. You can check the quiz details before starting to see if there’s a timer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className='text-xl font-semibold'>Can I view my quiz history?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          Yes, you can view your past quiz attempts, scores, and performance breakdowns in the Quiz History section of your account.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className='text-xl font-semibold'>How do I report a problem with a quiz question?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          If you find an issue with a question, such as incorrect answers or technical problems, you can report it by clicking the Report Issue button located under each question.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className='text-xl font-semibold'>Are there any rewards for completing quizzes?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          Some quizzes may offer badges, certificates, or points that can be redeemed for rewards. Check the quiz description for more details on available rewards.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger className='text-xl font-semibold'>What is the main theme?</AccordionTrigger>
          <AccordionContent className='text-lg'>
          Main theme of a Quiz Pulse is to provide an engaging platform for learning and testing knowledge through interactive quizzes. It focuses on entertainment, education, and self-assessment, allowing users to challenge themselves or compete with others while gaining knowledge on various topics.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
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
