"use client";

import { useState } from "react";

export interface AccordionCardProps {
  icon: React.ReactNode;
  title: string;
  blurb: string;
}

export default function AccordionCard({ icon, title, blurb }: AccordionCardProps) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <button className="flex gap-8 items-center bg-another-blue py-8 rounded-2xl justify-between text-left relative cursor-pointer" onClick={handleToggle}>
      <div className={`h-full flex items-center justify-center bg-sky-blue rounded-2xl absolute top-0 left-0 ${isOpen ? "py-20 px-16" : "py-0 px-6"}`}>
        {icon}
      </div>
      <div className="flex flex-col pl-64 pr-6 gap-4">
        <span className="text-2xl font-semibold">{title}</span>
        {isOpen && (
          <p className="text-xl font-satoshi">{blurb}</p>
        )}
      </div>
      <span className="text-6xl font-semibold pr-10">
        {isOpen ? "+" : "-"}
      </span>
    </button >
  )
}