import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import SvgIcons from "../assets/icons/SvgIcons";

export default function SortCourses({ isShowSortCorses, setIsShowSortCorses }) {
  // useEffect(() => {
  //   document.body.addEventListener("click", closeModal);
  //   return () => {
  //     window.removeEventListener("click", closeModal);
  //   };
  // }, [isShowSortCorses]);
  // const closeModal = () => {
  //   setIsShowSortCorses(false)
  // };
  return createPortal(
    <div
      className={`${
        isShowSortCorses && "flex"
      } items-end absolute inset-0 w-screen h-screen bg-zinc-950/50  sort-box-animation`}
      onClick={() => setIsShowSortCorses(false)}
    >
      <div className="w-full">
        <div className="flex items-center p-5 bg-gray-200 dark:bg-black-300 text-zinc-700 dark:text-white child:font-danaDemiBold child:text-lg rounded-ss-2xl rounded-se-2xl">
          <span
            className="cursor-pointer"
            onClick={() => setIsShowSortCorses(false)}
          >
            <svg className="w-6 h-6 ml-5 text-slate-400">
              <use href="#x-mark"></use>
            </svg>
          </span>
          <span>مرتب سازی بر اساس</span>
        </div>
        <div className="bg-white dark:bg-black-400 child:p-5 text-slate-500 dark:text-slate-400 divide-y divide-slate-700">
          <div
            className={`text-selected flex items-center justify-between text-sm`}
          >
            <span>همه دوره‌ها</span>
            <svg className="w-6 h-6">
              <use href="#check"></use>
            </svg>
          </div>
          <div
            className={`flex items-center justify-between text-slate-400 text-sm`}
          >
            <span>ارزان ترین</span>
            <svg className="w-6 h-6 ">
              <use href="#check"></use>
            </svg>
          </div>
          <div
            className={`flex items-center justify-between text-slate-400 text-sm`}
          >
            <span>گران ترین</span>
            <svg className="w-6 h-6 ">
              <use href="#check"></use>
            </svg>
          </div>
          <div
            className={`flex items-center justify-between text-slate-400 text-sm`}
          >
            <span>پرمخاطب‌ها</span>
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