import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FilterCorses from "../components/FilterCorses/FilterCorses";
import CourseBox from "../components/CourseBox/CourseBox";
import FilterCorsesMobile from "../components/FilterCorsesMobile/FilterCorsesMobile";
import SortCourses from "./../components/SortCourses/SortCourses";
import { useParams } from "react-router-dom";

export default function Category() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isShowSortCorses, setIsShowSortCorses] = useState(false);
  const [coursesData, setCourseData] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    window.document.body.classList.toggle("overflow-hidden");
  }, [isShowFilter]);
  useEffect(() => {
    window.document.body.classList.toggle("overflow-hidden");
  }, [isShowSortCorses]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const local = JSON.parse(localStorage.getItem("user"));
    const { categoryName } = useParams();
    const fetchData = await fetch(
      `localhost:4000/v1/courses/category/${categoryName}`,
      {
        headers: {
          Authorization: `Bearer ${local.token}`,
        },
      }
    );
    const json = await fetchData.json();
    setCourseData(json);
  };
  return (
    <div>
      {/* <!--------------------------------  Category-Header  --------------------------------> */}
      <Header />
      {/* <!--------------------------------  Category-Section  --------------------------------> */}
      <section>
        <div className="container">
          <div className="flex-center w-full mt-14 mb-9">
            <span className="inline-block w-10 h-2.5 bg-rose-500 rounded-sm"></span>
            <h1 className="mr-2.5 font-morabbaBold dark:text-white  text-4xl sm:text-6xl">
              {categoryName}
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
                <div className="hidden sm:grid grid-cols-2 lg:grid-cols-1 gap-5">
                  <FilterCorses text="دوره های رایگان" selected={false} />
                  <FilterCorses text="درحال پیش فروش" selected={true} />
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
                {isShowSortCorses && (
                  <SortCourses setIsShowSortCorses={setIsShowSortCorses} />
                )}

                <FilterCorsesMobile
                  isShowFilter={isShowFilter}
                  setIsShowFilter={setIsShowFilter}
                  selected={true}
                  component="category"
                />
              </div>
            </aside>
            {/* courses-gridBox */}
            <div className="grow">
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
              {coursesData.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-9">
                  {coursesData.map((course) => (
                    <CourseBox key={course._id} {...coursesData} />
                  ))}
                </div>
              ) : (
                <div className="p-5 mb-2.5 bg-pink-500 dark:bg-pink-600 rounded-2xl ">
                  <h1 className="font-morabbaBold text-white text-xl/10 -tracking-tighter">
                اطلاعات دوره‌ها بر اساس{" "}
                    <span className="text-sky-500/80">کتگوری</span> به علت مشکل
                    در <span className="text-sky-500/80">بک اند</span> ارائه
                    نمی‌شود❕
                  </h1>
                </div>
              )}
              {/* <div className="flex-center mx-auto mb-10">
                <span className="py-4 px-9 bg-gray-200 dark:bg-black-400 hover:bg-gray-300 text-xl text-center text-zinc-700 dark:text-white rounded-full cursor-pointer transition-colors">
                  مشاهده بیشتر دوره‌ها
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--------------------------------  Category-Footer  --------------------------------> */}

      <Footer />
    </div>
  );
}
