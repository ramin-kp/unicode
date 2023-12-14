import React from "react";

export default function PAdminItem({ title, count }) {
  return (
    <div className="p-2.5 bg-white dark:bg-black-400 rounded-xl shadow">
      <div className="flex items-center gap-x-2.5 font-morabbaBold text-2xl text-zinc-700 dark:text-white">
        <span className="inline-block w-5 h-5 bg-rose-500 rounded"></span>
        <h1>{title}</h1>
      </div>
      <span className="flex justify-between items-center p-5 font-danaMedium text-xl text-zinc-700 dark:text-white ">
        {count}
        <svg className="w-5 h-5 text-yellow-500">
          <use href="#star"></use>
        </svg>
      </span>
      <p className="p-5 text-base text-slate-600 dark:text-slate-400">
        {title}در یک ماه گذشته
      </p>
    </div>
  );
}
