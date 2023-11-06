import React from "react";

export default function FilterCorses({ text, selected }) {
  return (
    <div className="hidden sm:flex items-center justify-between p-6 bg-white dark:bg-black-400 rounded-2xl">
      <span className="text-zinc-700 dark:text-white">{text}</span>
      <span
        className={` ${
          selected ? "filter-selected-marker bg-sky-500 dark:bg-secondary-400" : "filter-marker bg-gray-200"
        } relative inline-block w-[56px] h-6  dark:bg-black-500 rounded-full transition-all duration-150`}
      ></span>
    </div>
  );
}
