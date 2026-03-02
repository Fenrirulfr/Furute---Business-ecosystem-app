import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className={`border rounded-3xl overflow-hidden bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 ${openIndex === index ? 'border-brand-blue/30 dark:border-brand-red/40' : 'border-slate-200/80 dark:border-white/10'}`}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between gap-6 p-6 sm:p-8 text-left focus:outline-none group"
          >
            <h3 className="text-lg sm:text-xl font-bold text-accent-blue dark:text-white pr-8 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">
              {item.question}
            </h3>
            <div className="size-10 sm:size-12 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 group-hover:bg-brand-blue/10 dark:group-hover:bg-brand-red/10 transition-colors duration-300">
              <span className={`material-symbols-outlined transition-transform duration-300 text-slate-500 dark:text-slate-400 ${openIndex === index ? 'rotate-180 text-brand-blue dark:text-brand-red' : ''}`}>
                expand_more
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 sm:px-8 pb-8 pt-4 text-slate-600 dark:text-gray-300 font-medium leading-relaxed text-base sm:text-lg">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
