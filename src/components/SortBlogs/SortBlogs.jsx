import React from "react";
import { createPortal } from "react-dom";
import SvgIcons from "../assets/icons/SvgIcons";

export default function SortBlogs({ setIsShowSortBlogs }) {
  return createPortal(
    <div className={`fixed inset-0 flex flex-col w-screen h-screen z-20`}>
      <div
        className="grow bg-zinc-800/50"
        onClick={() => setIsShowSortBlogs(false)}
      ></div>
      <div className="w-screen sort-box-animation">
        <div className="flex items-center p-5 bg-gray-200 dark:bg-black-300 text-zinc-700 dark:text-white child:font-danaDemiBold child:text-lg rounded-ss-2xl rounded-se-2xl">
          <span
            className="cursor-pointer"
            onClick={() => setIsShowSortBlogs(false)}
          >
            <svg className="w-6 h-6 ml-5 text-slate-400">
              <use href="#x-mark"></use>
            </svg>
          </span>
          <span>مرتب سازی بر اساس</span>
        </div>
        <div className="bg-white dark:bg-black-400 child:p-5 text-slate-500 dark:text-slate-400 divide-y dark:divide-slate-700">
          <div
            className={`text-selected flex items-center justify-between text-sm`}
          >
            <span>عادی</span>
            <svg className="w-6 h-6">
              <use href="#check"></use>
            </svg>
          </div>
          <div
            className={`flex items-center justify-between text-slate-400 text-sm`}
          >
            <span>جدیدترین</span>
            <svg className="w-6 h-6 ">
              <use href="#check"></use>
            </svg>
          </div>
          <div
            className={`flex items-center justify-between text-slate-400 text-sm`}
          >
            <span>قدیمی ترین</span>
            <svg className="w-6 h-6 ">
              <use href="#check"></use>
            </svg>
          </div>

          <div
            className={`flex items-center justify-between text-slate-400 text-sm`}
          >
            <span>پرنظرها</span>
            <svg className="w-6 h-6 ">
              <use href="#check"></use>
            </svg>
          </div>
        </div>
      </div>
      <SvgIcons />
    </div>,
    document.getElementById("modal")
  );
}
