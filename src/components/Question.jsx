"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What results does Inito give?",
    answer:
      "Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 4 hormones.",
  },
  {
    question: "How many test strips are required per cycle?",
    answer:
      "The number of tests depends on the irregularity and length of your cycles. For someone with an average cycle length of 30 days, 12-15 tests may be required to track and confirm ovulation.",
  },
  {
    question:
      "Where can I get more refill strips? Do I need to buy a new monitor every cycle?",
    answer:
      "Boxes of strips are available in the ‘shop’ tab in the Inito app. You don’t need to purchase the monitor again.",
  },
  {
    question: "Do I need to use a test strip for each hormone?",
    answer:
      "No. Inito is the only fertility monitor that measures Estrogen, LH, PdG (urine metabolite of progesterone) and FSH on a single test strip.",
  },
  {
    question: "Will Inito work if I have PCOS?",
    answer:
      "Every woman is unique, especially with a condition like PCOS, which can influence hormone levels. Inito shows you a full picture of your cycle, which can help you identify your fertile days and confirm ovulation.",
  },
  {
    question: "Do medications affect the results?",
    answer:
      "Fertility medications or other drugs that influence your hormones can prevent Inito from giving you accurate results. You will still be able to see your hormone patterns via the App.",
  },
  {
    question: "Can I use HSA benefits to purchase Inito?",
    answer: "Yes!",
  },
  {
    question: "What is Inito's regulatory status in the US?",
    answer:
      "The Inito Fertility Monitor is registered with the U.S. Food and Drug Administration (FDA) as a Class I medical device that is exempt from FDA's premarket notification submission requirements. The registration status should not be misunderstood as suggesting that the Inito Fertility Monitor has been reviewed, cleared or approved by FDA.",
  },
  {
    question: "Are there any limits to specific hormone thresholds?",
    answer:
      "Inito is designed to read all kinds of drops and surges in hormone levels. However, the set limits of measurement for E3G is 600 ng/ml, PdG is 40 ug/ml, and FSH & LH is 40 mIU/ml.",
  },
];

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="question-cons">
      <h1 className="question-h1">
        Your top<span className="image_as_circled"> questions, </span>answered
      </h1>
      <ul className="acc-con">
        <div className="column-1">
          {faqs.slice(0, 4).map((faq, index) => (
            <li key={index}>
              <div className="head" onClick={() => handleToggle(index)}>
                <h6 className="text-dtheme font-semi-bold">{faq.question}</h6>
                <div className="img"></div>
              </div>
              <div
                className="body"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                  overflow: "hidden",
                }}
              >
                <p className="text text-dtheme font-med">{faq.answer}</p>
              </div>
            </li>
          ))}
        </div>
        <div className="column-2">
          {faqs.slice(4).map((faq, index) => (
            <li key={index + 4}>
              <div className="head" onClick={() => handleToggle(index + 4)}>
                <h6 className="text-dtheme font-semi-bold">{faq.question}</h6>
                <div className="img"></div>
              </div>
              <div
                className="body"
                style={{
                  maxHeight: openIndex === index + 4 ? "500px" : "0",
                  overflow: "hidden",
                }}
              >
                <p className="text text-dtheme font-med">{faq.answer}</p>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
};

export default Question;
