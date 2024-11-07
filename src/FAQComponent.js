import { useState } from "react";
import FAQItem from "./FAQItem";

const FAQComponent = () => {
  const faqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  const [showIndex, setShowIndex] = useState(0);

  return (
    <div>
      {faqs.map((faq, index) => {
        return (
          <FAQItem
            faq={faq}
            showIndex={showIndex === index ? true : false}
            setShowIndex={
              index === showIndex
                ? () => setShowIndex(null)
                : () => setShowIndex(index)
            }
          />
        );
      })}
    </div>
  );
};

export default FAQComponent;
