import React from 'react';
import './info.css';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../ui/tooltip';

const InfoRank = ({user}) => {
  console.log(user);
  return (
    <>
    {/* rank */}
    <TooltipProvider>
      <Tooltip>
        {/* The element that triggers the tooltip */}
        <TooltipTrigger asChild>
          <button className="bg-[#c6bbf9] hover:bg-[#8077f4] mb-1 text-black p-3 rounded-full">5</button>
        </TooltipTrigger>
        
        {/* Tooltip content */}
        <TooltipContent side="top">
          <p>Ranking</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    {/* mark */}
    <TooltipProvider>
      <Tooltip>
        {/* The element that triggers the tooltip */}
        <TooltipTrigger asChild>
          <button className="bg-[#c6bbf9] mb-1 hover:bg-[#8077f4] text-black p-2 rounded-full">{user.participatedQuizes}</button>
        </TooltipTrigger>
        
        {/* Tooltip content */}
        <TooltipContent side="top">
          <p>Quiz number</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    {/* average mark */}
    <TooltipProvider>
      <Tooltip>
        {/* The element that triggers the tooltip */}
        <TooltipTrigger asChild>
          <button className="bg-[#c6bbf9] mb-1 hover:bg-[#8077f4] text-black p-2 rounded-full">100</button>
        </TooltipTrigger>
        
        {/* Tooltip content */}
        <TooltipContent side="top">
          <p>Avarage mark</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    {/*  */}
    </>
  );
};

export default InfoRank;
