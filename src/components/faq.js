"use client";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = ({ faqData }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <div className="container mx-auto">
      {faqData.map((item, index) => (
        <div className=" mb-[10px] py-4" key={index} >
          <div className="flex gap-[10px] cursor-pointer">
            <h3 className="text-[20px] text-blue-500">{item.question}</h3>
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-blue-500 rounded-full" onClick={() => toggleExpand(index)}>
                <Image className={expanded[index] && 'rotate-180 transition-all duration-300' } src="arrow-down.svg" alt="" height={16} width={16}/>
            </div>
          </div>
          {expanded[index] && <div className="shadow-md">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
