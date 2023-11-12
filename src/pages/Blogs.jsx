import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArticlesBox from "./../components/ArticlesBox/ArticlesBox";
import { Link } from "react-router-dom";
import SvgIcons from "../components/assets/icons/SvgIcons";
import SortBlogs from "../components/SortBlogs/SortBlogs";

export default function Blogs() {
  const [isShowSortBlogs, setIsShowSortBlogs] = useState(false);
  return (
    <div>
      {/* <!--------------------------------  Blogs-Header  --------------------------------> */}
      <Header />
      {/* <!--------------------------------  Blogs-Section  --------------------------------> */}
      <section>
        <div className="container">
          <div className="flex-center w-full mt-14 mb-9">
            <span className="inline-block w-10 h-2.5 bg-yellow-500 rounded-sm"></span>
            <h1 className="mr-2.5 font-morabbaBold dark:text-white  text-4xl sm:text-6xl">
              وبلاگ
            </h1>
          </div>
          <div className="lg:flex items-start justify-between gap-5">
            <aside className=" flex flex-wrap lg:flex-col lg:flex-nowrap space-y-5 mb-5 lg:mb-0">
              {/* blogs-tag */}
              <div className="hidden lg:flex flex-col w-[300px] py-5  bg-white  dark:bg-black-400 text-slate-500 dark:text-slate-400 rounded-2xl">
                <span className="flex items-center mb-2 text-zinc-700 font-danaDemiBold text-lg dark:text-white">
                  <span className="block w-7 h-2.5 bg-purple-600 rounded-sm ml-2.5"></span>
                  تگ های محبوب
                </span>
                <div
                  className="flex flex-wrap gap-2 px-3.5 mt-2 child:flex-center child:px-5 child:py-1.5 child:bg-gray-100
                dark:child:bg-black-300 text-zinc-700 dark:text-white text-sm hover:child:bg-sky-500 dark:hover:child:bg-secondary-300 hover:child:text-white dark:hover:child:text-white child:transition-all child:rounded-full"
                >
                  <Link to="#">#برنامه_نویسی_فرانت_اند</Link>
                  <Link to="#">#کنکور</Link>
                  <Link to="#">#برنامه_نویسی_فرانت_اند</Link>
                  <Link to="#">#کنکور</Link>
                  <Link to="#">#فرانت اند</Link>
                  <Link to="#">#فرانت اند</Link>
                  <Link to="#">#برنامه_نویسی_فرانت_اند</Link>
                  <Link to="#">#کنکور</Link>
                  <Link to="#">#برنامه_نویسی_فرانت_اند</Link>
                  <Link to="#">#برنامه_نویسی_فرانت_اند</Link>
                  <Link to="#">#فرانت اند</Link>
                  <Link to="#">#کنکور</Link>
                  <Link to="#">#برنامه_نویسی_فرانت_اند</Link>
                  <Link to="#">#کنکور</Link>
                  <Link to="#">#فرانت اند</Link>
                  <Link to="#">#فرانت اند</Link>
                  <Link to="#">#برنامه_نویسی_فرانت_اند</Link>
                </div>
              </div>
              <div className="hidden lg:flex flex-col w-[300px] py-5  bg-white  dark:bg-black-400 text-slate-500 dark:text-slate-400 rounded-2xl">
                <span className="flex items-center mb-2 text-zinc-700 font-danaDemiBold text-lg dark:text-white">
                  <span className="block w-7 h-2.5 bg-green-500 rounded-sm ml-2.5"></span>
                  دسته بندی ها
                </span>
                <div className="flex flex-col items-start gap-2 px-3.5 mt-2 child:flex-center">
                  <Link className="flex" to="#">
                    <svg className="w-5 h-5 text-green-500 rotate-180">
                      <use href="#play-solid"></use>
                    </svg>
                    <span className="font-danaLight text-sm text-zinc-700 dark:text-white mr-2.5">
                      طراحی سایت
                    </span>
                  </Link>
                  <Link className="flex" to="#">
                    <svg className="w-5 h-5 text-green-500 rotate-180">
                      <use href="#play-solid"></use>
                    </svg>
                    <span className="font-danaLight text-sm text-zinc-700 dark:text-white mr-2.5">
                      کسب درامد از برنامه نویسی
                    </span>
                  </Link>
                  <Link className="flex" to="#">
                    <svg className="w-5 h-5 text-green-500 rotate-180">
                      <use href="#play-solid"></use>
                    </svg>
                    <span className="font-danaLight text-sm text-zinc-700 dark:text-white mr-2.5">
                      طراحی سایت
                    </span>
                  </Link>
                  <Link className="flex" to="#">
                    <svg className="w-5 h-5 text-green-500 rotate-180">
                      <use href="#play-solid"></use>
                    </svg>
                    <span className="font-danaLight text-sm text-zinc-700 dark:text-white mr-2.5">
                      طراحی سایت
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between gap-x-5 w-full">
                <div
                  className="flex-center sm:hidden gap-2 py-2 w-full bg-white dark:bg-black-400 font-danaLight text-slate-500 dark:text-slate-400 text-base rounded-md cursor-pointer"
                  onClick={() => setIsShowSortBlogs(true)}
                >
                  <svg className="w-5 h-5">
                    <use href="#filter"></use>
                  </svg>
                  <span className="text-zinc-700 dark:text-white">
                    همه وبلاگ
                  </span>
                </div>
                {isShowSortBlogs && (
                  <SortBlogs setIsShowSortBlogs={setIsShowSortBlogs} />
                )}
              </div>
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
                  <li className="selected">عادی</li>
                  <li className="">جدیدترین</li>
                  <li>قدیمی ترین</li>
                  <li>پرنظرها</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-9">
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
                <ArticlesBox />
              </div>
              <div className="flex-center mx-auto mb-10">
                <span className="py-4 px-9 bg-gray-200 dark:bg-black-400 hover:bg-gray-300 text-xl text-center text-zinc-700 dark:text-white rounded-full cursor-pointer transition-colors">
                  مشاهده بیشتر
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--------------------------------  Blogs-Footer  --------------------------------> */}

      <Footer />
      <SvgIcons />
    </div>
  );
}
