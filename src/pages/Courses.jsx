import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SvgIcons from "../components/assets/icons/SvgIcons";
import CourseBox from "../components/CourseBox/CourseBox";

export default function Courses() {
  return (
    <div>
      <Header />
      <section>
        <div className="container">
          <div className="flex-center w-full mt-14 mb-9 mx-auto">
            <span className="inline-block w-10 h-2.5 bg-rose-500 rounded"></span>
            <h1 className="mr-2.5 font-morabbaBold dark:text-white  text-4xl sm:text-6xl">
              دوره‌ها
            </h1>
          </div>
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-center justify-between w-[300px] h-[68px] px-7 bg-white text-slate-500 rounded-2xl">
              <input
                className="outline-none"
                type="text"
                placeholder="جستجو کنید"
              />
              <svg className="w-6 h-6">
                <use href="#search"></use>
              </svg>
            </div>
            <div>
              <div className="flex items-center flex-grow h-[68px] px-6 mb-5 bg-white rounded-2xl">
                <div className="flex items-center ml-6">
                  <svg className="w-7 h-7 ml-3">
                    <use href="#filter"></use>
                  </svg>
                  <span>مرتب سازی :</span>
                </div>
                <ul className="flex items-center gap-x-6 child:px-4 child:py-2.5 text-slate-500 child:cursor-pointer">
                  <li className="selected rounded-lg ">همه دوره‌ها</li>
                  <li>ارزان ترین</li>
                  <li>گران ترین</li>
                  <li>پرمخاطب‌ها</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-9">
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
              <span className=" flex-center py-4 px-9 mb-10 bg-gray-200 text-base text-center text-zinc-700 rounded-full ">
                مشاهده بیشتر دوره‌ها
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <SvgIcons />
    </div>
  );
}
