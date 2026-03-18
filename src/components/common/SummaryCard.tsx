import React, { type JSX } from "react";

import { cn } from "@/lib/utils";

export type SummaryCardItem = {
  title: string;
  value: number | string;
  icon: JSX.Element;
};

interface SummaryCardProps {
  cards: SummaryCardItem[];
}
const SummaryCard = ({ cards }: SummaryCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((c: any, i) => (
        <div
          key={i}
          className="group bg-white rounded-2xl transition-all p-5 flex items-center justify-between border border-gray-100 hover:border-primary/40"
        >
          <div>
            <h2 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
              {c.title}
            </h2>
            <p className="text-lg font-semibold text-gray-900 mt-1">
              {c.value}
            </p>
          </div>
          <div className="text-white bg-primary p-0.5 rounded-full group-hover:bg-primary/90">
            {React.cloneElement(c.icon, {
              className: cn(c.icon.props.className, "group-hover:text-white"),
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
