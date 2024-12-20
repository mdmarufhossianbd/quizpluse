"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";

const FaQ = () => {

  return (
    <div className="w-full max-w-[90%] md:max-w-[95%] lg:w-[1440px] mx-auto px-4 py-8">
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-semibold py-6">
        Frequently Asked Questions
      </h1>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="How do I create an account for this application?">
          You can create an account by clicking the Sign Up button on the homepage. You will need to provide your email address, create a password, and verify your email to complete the process.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="How do I start a new quiz, and are there any prerequisites or steps required before beginning?">
          After logging in, go to the Quizzes section, select a quiz from the list, and click the Start Quiz button. Follow the instructions to begin.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Can I retake a quiz if I make any mistakes?">
          Yes, you can retake a quiz by navigating to the Completed Quizzes section and selecting the quiz you want to retake. Some quizzes may have restrictions on the number of attempts.
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title=" How are quiz scores calculated, and what factors or criteria are
              used to determine the final score?">
          Quiz scores are calculated based on the number of correct answers.
          Each correct answer is worth a certain number of points, and the
          total score will be displayed at the end of the quiz.
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 5" title="Is there a time limit for quizzes, and if so, how is it applied?
              Does the time vary based on the quiz type or difficulty?">
          Yes, there is often a time limit for quizzes, and it can vary based
          on the quiz type or difficulty. Typically, the time limit is set by
          the quiz creator or the platform hosting the quiz.
          <br />
          For example:
          <br />
          1.Standard Quizzes: These may have a fixed time limit that applies
          to all participants, ensuring a consistent testing environment.
          <br />
          2.Variable Time Limits: Some platforms allow different time limits
          based on the quiz type. For instance, a more complex quiz might have
          a longer time limit than a simple multiple-choice quiz.
          <br />
          3.Difficulty-Based Limits: In certain cases, quizzes designed for
          advanced learners might include stricter time constraints to
          challenge participants further. Overall, the specifics about time
          limits are usually outlined in the quiz instructions or guidelines
          provided before starting the quiz.        </AccordionItem>
        <AccordionItem key="6" aria-label="Accordion 6" title="Can I view my history include details like scores, questions, and
              answers from previous quizzes?">
          Yes, you can view your past quiz attempts, scores, and performance
          breakdowns in the Quiz History section of your account.
        </AccordionItem>
        <AccordionItem key="7" aria-label="Accordion 7" title=" How do I report a problem with a quiz question, and what is the
              process for submitting it?">
          If you find an issue with a question, such as incorrect answers or
          technical problems, you can report it by clicking the Report Issue
          button located under each question.
        </AccordionItem>
        <AccordionItem key="8" aria-label="Accordion 8" title="Are there any rewards for completing quizzes, and what types of
              rewards are offered?">
          Some quizzes may offer badges, certificates, or points that can be
          redeemed for rewards. Check the quiz description for more details on
          available rewards.
        </AccordionItem>
        <AccordionItem key="9" aria-label="Accordion 9" title="What is the main theme of the quiz, and how does it relate to the
              overall subject or objectives being assessed?">
          Main theme of a Quiz Pulse is to provide an engaging platform for
          learning and testing knowledge through interactive quizzes. It
          focuses on entertainment, education, and self-assessment, allowing
          users to challenge themselves or compete with others while gaining
          knowledge on various topics.
        </AccordionItem>
        <AccordionItem key="10" aria-label="Accordion 10" title="Is it profitable, and what factors contribute to its
              profitability?">
          Yes, the quiz app can be profitable. Revenue can come from several
          sources, such as in-app ads, offering a paid version with additional
          features, or in-app purchases for extra content or lives. Engaging
          content and a good user experience help retain users, which boosts
          profitability through continued usage, upgrades, or ad views.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaQ;
