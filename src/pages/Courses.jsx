import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SvgIcons from "../components/assets/icons/SvgIcons";
import CourseBox from "../components/CourseBox/CourseBox";
import FilterCorses from "../components/FilterCorses/FilterCorses";
import FilterCorsesMobile from "../components/FilterCorsesMobile/FilterCorsesMobile";
import SortCourses from "../components/SortCourses/SortCourses";

export default function Courses() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isShowSortCorses, setIsShowSortCorses] = useState(false);
  useEffect(() => {
    window.document.body.classList.toggle("overflow-hidden");
  }, [isShowFilter]);
  useEffect(() => {
    window.document.body.classList.toggle("overflow-hidden");
  }, [isShowSortCorses]);
  return (
    <div>
      <Header />
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section>
        <div className="container">
          <div className="flex-center w-full mt-14 mb-9">
            <span className="inline-block w-10 h-2.5 bg-rose-500 rounded-sm"></span>
            <h1 className="mr-2.5 font-morabbaBold dark:text-white  text-4xl sm:text-6xl">
              دوره‌ها
            </h1>
          </div>
          <div className="lg:flex items-start justify-between gap-5">
            <aside className="lg:sticky top-5 flex flex-wrap lg:flex-col lg:flex-nowrap space-y-5 mb-5 lg:mb-0">
              {/* Courses-Search */}
              <div className="flex items-center justify-between w-full h-[68px] px-10  bg-white  dark:bg-black-400 text-slate-500 dark:text-slate-400 rounded-2xl">
                <input
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="جستجو کنید"
                />
                <svg className="w-6 h-6">
                  <use href="#search"></use>
                </svg>
              </div>
              {/* Courses-Filter-Desktop */}
              <div className="hidden sm:inline w-full space-y-5">
                <div className="hidden sm:block p-6 bg-white dark:text-slate-400 dark:bg-black-400 rounded-2xl">
                  <h1 className="text-zinc-700 dark:text-white font-danaDemiBold text-lg mb-5">
                    دسته بندی دوره ها
                  </h1>
                  <div className="flex-col space-y-3.5">
                    <div className="flex items-center justify-between">
                      <label
                        className="flex items-center text-zinc-700 dark:text-white text-base cursor-pointer"
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
                <div className="hidden sm:grid grid-cols-2 lg:grid-cols-1 gap-5">
                  <FilterCorses text="دوره های رایگان" selected={false} />
                  <FilterCorses text="درحال پیش فروش" selected={true} />
                  <FilterCorses text="دوره‌های خریداری شده" selected={false} />
                </div>
              </div>
              <div className="flex items-center justify-between gap-x-5 w-full">
                <div
                  className="flex-center sm:hidden gap-2 py-2 w-full bg-white dark:bg-black-400 font-danaLight text-slate-500 dark:text-slate-400 text-base rounded-md cursor-pointer"
                  onClick={() => setIsShowFilter(true)}
                >
                  <svg className="w-5 h-5">
                    <use href="#adjustments-vertical"></use>
                  </svg>
                  <span className="text-zinc-700 dark:text-white">فیلتر</span>
                </div>
                <div
                  className="flex-center sm:hidden gap-2 py-2 w-full bg-white dark:bg-black-400 font-danaLight text-slate-500 dark:text-slate-400 text-base rounded-md cursor-pointer"
                  onClick={() => setIsShowSortCorses(true)}
                >
                  <svg className="w-5 h-5">
                    <use href="#filter"></use>
                  </svg>
                  <span className="text-zinc-700 dark:text-white">
                    همه دوره‌ها
                  </span>
                </div>
              </div>
              {/* Sort-Courses */}
              {isShowSortCorses && (
                <SortCourses
                  isShowSortCorses={isShowSortCorses}
                  setIsShowSortCorses={setIsShowSortCorses}
                />
              )}

              {/* Courses-Filter-Mobile */}
              <FilterCorsesMobile
                isShowFilter={isShowFilter}
                setIsShowFilter={setIsShowFilter}
                selected={true}
              />
            </aside>
            {/* courses-gridBox */}
            <div className="">
              <div className="hidden sm:flex items-center flex-grow h-[68px] px-6 mb-5 bg-white dark:bg-black-400 dark:text-white rounded-2xl">
                <div className="flex items-center ml-3 text-sm">
                  <svg className="w-5 h-5 ml-3">
                    <use href="#filter"></use>
                  </svg>
                  <span>مرتب سازی :</span>
                </div>
                <ul className="flex items-center gap-x-2  child:px-4 child:py-2.5 child:text-sm text-slate-500 dark:text-slate-400 child:rounded-lg child:cursor-pointer">
                  <li className="selected">همه دوره‌ها</li>
                  <li className="">ارزان ترین</li>
                  <li>گران ترین</li>
                  <li>پرمخاطب‌ها</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-9">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
              <div className="flex-center mx-auto my-5">
                <span className="py-4 px-9 bg-gray-200 dark:bg-black-300 dark:hover:bg-black-200 hover:bg-gray-300 text-base text-center text-zinc-700 dark:text-white rounded-full cursor-pointer transition-colors">
                  مشاهده بیشتر دوره‌ها
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--------------------------------  Courses-Footer  --------------------------------> */}
      <Footer />
      <SvgIcons />
    </div>
  );
}
