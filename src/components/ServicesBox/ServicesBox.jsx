import React from "react";
import SvgIcons from "../assets/icons/SvgIcons";

export default function ServicesBox({ title, description, color, svg }) {
  return (
    <div className="sm:flex items-center bg-white dark:bg-black-400 p-2.5 rounded-xl shadow-md">
      <div>
        <svg className={`w-20 h-20 mx-auto mb-1.5 sm:mb-0 sm:mx-0 ${color}`}>
          <use href={svg}></use>
        </svg>
      </div>
      <div className="sm:mr-5 lg:mr-[30px]">
        <h1 className="text-center sm:text-right font-danaDemiBold text-xl text-slate-500 dark:text-white">
          {title}
        </h1>
        <h4 className="mt-5 sm:mt-1.5 text-center sm:text-right font-danaLight text-sm text-zinc-700 dark:text-slate-400">
          {description}
        </h4>
      </div>
      <SvgIcons />
    </div>
  );
}
