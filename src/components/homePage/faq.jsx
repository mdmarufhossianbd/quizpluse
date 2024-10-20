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
          <AccordionTrigger className='text-xl'>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className='text-xl'>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className='text-xl'>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaQ;
