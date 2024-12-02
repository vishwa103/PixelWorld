import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on all items, provided they are unused and in their original packaging.',
      isOpen: false,
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 5-7 business days for standard delivery and 2-3 days for expedited shipping.',
      isOpen: false,
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Additional shipping fees may apply.',
      isOpen: false,
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, once your order is shipped, you will receive a tracking link via email.',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : faq.isOpen,
      }))
    );
  };

  return (
    <div className='faq'>
      <div className='faq-title'>Frequently Asked Questions</div>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item' onClick={() => toggleFAQ(index)}>
            <div className='d-flex justify-content-between align-items-center'>
            <div
              className='faq-question'
            >
              {faq.question}
            </div>
            <div className='text-primary'>
                {!faq.isOpen ? <IoIosArrowDown size={24} fontWeight={500} /> : <IoIosArrowUp size={24} fontWeight={500} />}
            </div>
            </div>
            {faq.isOpen && (
              <div
                className='faq-answer'
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
