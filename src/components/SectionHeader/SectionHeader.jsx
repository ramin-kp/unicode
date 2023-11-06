import React from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";

export default function SectionHeader({ title, description, link, color }) {
  return (
    <div className="container">
      <div className="sm:flex items-center justify-between mt-28 mb-[38px]">
        <div>
          <div className="flex items-center">
            <span
              className={`inline-block w-5 h-5 ml-2.5 ${color} rounded-md`}
            ></span>
            <h1 className="font-danaDemiBold text-3xl text-zinc-700 dark:text-white">
              {title}
            </h1>
          </div>
          <h4 className="mt-2.5 text-base text-slate-500 dark:text-slate-400">
            {description}
          </h4>
        </div>
        {link && (
          <div className="flex items-center w-1/2 sm:w-auto mr-auto sm:mr-0 mt-2.5 sm:mt-0 py-1.5 pr-1.5 pl-0.5 text-sky-500 dark:text-secondary-300 hover:bg-sky-200 dark:hover:bg-secondary-700 rounded-md transition-all delay-75">
            <Link to={link}>مشاهده تمام دوره‌ها</Link>
            <svg className="w-6 h-6">
              <use href="#arrow"></use>
            </svg>
          </div>
        )}
      </div>
      <SvgIcons />
    </div>
  );
}
