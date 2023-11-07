import React from "react";
import SvgIcons from "../assets/icons/SvgIcons";
import { createPortal } from "react-dom";

export default function FilterCorsesMobile({
  isShowFilter,
  setIsShowFilter,
  selected,
  component,
}) {
  return createPortal(
    <div
      className={` ${
        isShowFilter ? "fixed" : "hidden"
      } inset-0 flex flex-col h-screen bg-white z-50`}
    >
      {/* filter-header */}
      <div className="flex items-center  justify-between p-5 bg-gray-100 dark:bg-black-300">
        <div
          className="flex-center cursor-pointer "
          onClick={() => setIsShowFilter(false)}
        >
          <svg className="w-6 h-6 text-zinc-700 dark:text-slate-400 ml-2.5">
            <use href="#x-mark"></use>
          </svg>
          <span className="text-lg text-zinc-700 dark:text-white font-danaMedium">
            فیلتر
          </span>
        </div>
        <button className="flex items-start bg-pink-200/50 dark:bg-red-500/10 px-2.5 py-1.5 text-sm text-pink-500 dark:text-red-600 rounded-xl">
          <svg className="w-5 h-5 ml-1">
            <use href="#trash"></use>
          </svg>
          حذف فیلترها
        </button>
      </div>
      <div className=" flex flex-col h-full px-5 child:dark:text-white bg-white dark:bg-black-400">
        {/* filter-main */}
        <div className="divide-y dark:divide-slate-700 child:py-5 child:text-sm text-slate-500">
          {component === "category" ? (
            <>
              <label
                className="flex items-center justify-between w-full cursor-pointer "
                htmlFor="selected"
              >
                <input type="checkbox" name="" id="selected" hidden />
                <span>فقط دوره های رایگان</span>
                <span
                  className={` ${
                    selected
                      ? "filter-selected-marker bg-sky-500 dark:bg-secondary-400"
                      : "filter-marker bg-gray-200"
                  } relative inline-block w-[56px] h-6  dark:bg-black-500 rounded-full transition-all duration-150`}
                ></span>
              </label>
              <label
                className="flex items-center justify-between w-full cursor-pointer"
                htmlFor="selected"
              >
                <input type="checkbox" name="" id="selected" hidden />
                <span>درحال پیش فروش</span>
                <span
                  className={` ${
                    selected
                      ? "filter-selected-marker bg-sky-500 dark:bg-secondary-400"
                      : "filter-marker bg-gray-200"
                  } relative inline-block w-[56px] h-6  dark:bg-black-500 rounded-full transition-all duration-150`}
                ></span>
              </label>
            </>
          ) : (
            <>
              <label
                className="flex items-center justify-between w-full cursor-pointer "
                htmlFor="selected"
              >
                <input type="checkbox" name="" id="selected" hidden />
                <span>فقط دوره های رایگان</span>
                <span
                  className={` ${
                    selected
                      ? "filter-selected-marker bg-sky-500 dark:bg-secondary-400"
                      : "filter-marker bg-gray-200"
                  } relative inline-block w-[56px] h-6  dark:bg-black-500 rounded-full transition-all duration-150`}
                ></span>
              </label>
              <label
                className="flex items-center justify-between w-full cursor-pointer"
                htmlFor="selected"
              >
                <input type="checkbox" name="" id="selected" hidden />
                <span>درحال پیش فروش</span>
                <span
                  className={` ${
                    selected
                      ? "filter-selected-marker bg-sky-500 dark:bg-secondary-400"
                      : "filter-marker bg-gray-200"
                  } relative inline-block w-[56px] h-6  dark:bg-black-500 rounded-full transition-all duration-150`}
                ></span>
              </label>
              <div>
                <div>
                  <div className="flex items-center justify-between my-2">
                    <span>دسته بندی دوره ها</span>
                    <svg className="w-5 h-5">
                      <use href="#chevron-down"></use>
                    </svg>
                  </div>
                  <div className="flex-col space-y-3.5">
                    <div className="flex items-center justify-between">
                      <label
                        className="flex items-center text-zinc-700 dark:text-white text-sm cursor-pointer"
                        htmlFor="front"
                      >
                        <input type="checkbox" name="" id="front" hidden />
                        <span className="selected-checkbox inline-block w-4 h-4 ml-2.5 rounded "></span>
                        {/*  bg-gray-200 dark:bg-black-500 */}
                        <span>فرانت‌اند</span>
                      </label>
                      <span>30</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <label
                        className="flex items-center text-zinc-700 dark:text-white text-base cursor-pointer"
                        htmlFor="front"
                      >
                        <input type="checkbox" name="" id="front" hidden />
                        <span className="inline-block w-4 h-4 ml-2.5 bg-gray-200 dark:bg-black-500 rounded "></span>
                        <span>بک اند</span>
                      </label>
                      <span>5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <label
                        className="flex items-center text-zinc-700 dark:text-white text-base cursor-pointer"
                        htmlFor="front"
                      >
                        <input type="checkbox" name="" id="front" hidden />
                        <span className="inline-block w-4 h-4 ml-2.5 bg-gray-200 dark:bg-black-500 rounded "></span>
                        <span>امنیت</span>
                      </label>
                      <span>16</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <label
                        className="flex items-center text-zinc-700 dark:text-white text-base cursor-pointer"
                        htmlFor="front"
                      >
                        <input type="checkbox" name="" id="front" hidden />
                        <span className="inline-block w-4 h-4 ml-2.5 bg-gray-200 dark:bg-black-500 rounded "></span>
                        <span>پایتون</span>
                      </label>
                      <span>9</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <label
                        className="flex items-center text-zinc-700 dark:text-white text-base cursor-pointer"
                        htmlFor="front"
                      >
                        <input type="checkbox" name="" id="front" hidden />
                        <span className="inline-block w-4 h-4 ml-2.5 bg-gray-200 dark:bg-black-500 rounded "></span>
                        <span>هوش مصنوعی</span>
                      </label>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {/* filter-footer */}
        <div className="flex flex-col justify-end  grow pb-20">
          <button className="flex-center w-full py-3.5 bg-green-500 dark:bg-primary font-danaDemiBold text-lg text-white rounded-2xl">
            اعمال فیلتر
          </button>
        </div>
      </div>

      <SvgIcons />
    </div>,
    document.getElementById("modal")
  );
}
