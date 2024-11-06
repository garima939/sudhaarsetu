"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "What is Sudhaar Setu?",
    answer: "Sudhaar Setu is a platform dedicated to fostering positive change by connecting volunteers, resources, and initiatives for social improvement."
  },
  {
    question: "How can I get involved with Sudhaar Setu?",
    answer: "You can join as a volunteer, contribute by donating, or help spread awareness about our initiatives."
  },
  {
    question: "What types of projects does Sudhaar Setu support?",
    answer: "We support projects focused on education, women’s safety, environmental conservation, and social welfare."
  },
  {
    question: "Is there any cost to join as a volunteer?",
    answer: "No, volunteering with Sudhaar Setu is free. All you need is a commitment to help bring positive change."
  },
  {
    question: "How do I donate to Sudhaar Setu?",
    answer: "You can donate directly through our website by visiting the donation page and choosing your preferred method."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

};
