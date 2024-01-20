import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { gsap } from "gsap";

interface AccordionCardProps {
  title: string;
  content: React.ReactNode;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        duration: 0.3,
        height: isOpen ? 0 : "auto",
        ease: "back.out(1.7)",
      });
    }
  };

  return (
    <div className="bg-purple-normal rounded-lg shadow mb-2 text-slate-100">
      <button
        className="bg-purple-dark w-64 px-4 py-2 text-left text-sm font-medium rounded-lg hover:bg-purple-normal focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-indigo-600"
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <span className="md:text-lg text-sm">{title}</span>
          <ChevronDownIcon
            className={`h-5 w-5 transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="p-4 w-64 text-center text-sm">{content}</div>
      </div>
    </div>
  );
};

export default AccordionCard;