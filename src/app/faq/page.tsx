import React from "react";
import FAQ from '../../components/faq.js';

const page = () => {
  const faqData = [
    { question: "Question 1", answer: "Answer 1 goes here." },
    { question: "Question 2", answer: "Answer 2 goes here." },
    { question: "Question 3", answer: "Answer 3 goes here." },

    // Add more FAQ items as needed
  ];
  return <div className="bg-white text-black">
    <h1>Faq</h1>
    <FAQ faqData={faqData}/>
  </div>;
};

export default page;
