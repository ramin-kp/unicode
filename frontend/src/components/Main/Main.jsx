import React from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";

export default function Main() {
  return (
    <main>
      <div className="container">
        {/* menu */}
        <div className="lg:flex items-center justify-center lg:justify-between mt-2.5 lg:mt-25">
          {/* img-menu */}
          <div className="flex justify-center lg:justify-end lg:order-2 w-full lg:mr-12">
            <img
              className="dark:hidden lg:w-[578px]  lg:h-[480px]"
              src="./images/menu-img.png"
              alt="menu-img"
            />
            <img
              className="hidden dark:inline-block lg:w-[578px] lg:h-[480px]"
              src="./images/menu-dark.png"
              alt="menu-img"
            />
          </div>
          {/* title-menu */}
          <div className="flex-col justify-center items-center lg:inline-block lg:order-1">
            <h1 className="mb-4 font-morabbaBold text-4xl text-zinc-700 dark:text-white text-center lg:text-right leading-[60px]">
              {"مکانی برای "}
              <br className="lg:hidden" />
              توانمندسازی و تجربه در دنیای وب و فراتر از آن
            </h1>
            <h3 className="text-center lg:text-justify text-2xl leading-10 text-zinc-700 dark:text-white">
              با آکادمی یونی کٌد، همیشه در کنارتان هستیم تا به پیشرفت عالی در
              برنامه‌نویسی برسید.
            </h3>
            <div className="flex items-center justify-center lg:justify-start mt-12">
              <Link className="bg-sky-500 dark:bg-secondary-300 hover:bg-sky-600 dark:hover:bg-blue-600 px-5 sm:px-7 py-2.5 sm:py-3.5 font-danaMedium text-xs sm:text-base lg:text-xl text-white rounded-full transition-all delay-75">
                از اینجا شروع کنید
              </Link>
              <span className="flex-center w-11 sm:w-[58px] h-11 sm:h-[58px] mx-5 bg-green-500 hover:bg-green-600 rounded-full cursor-pointer">
                <svg className="w-4 sm:w-7 h-4 sm:h-7 text-white transition-all delay-75">
                  <use href="#play"></use>
                </svg>
              </span>
              <p className=" text-base sm:text-xl text-slate-500 dark:text-slate-400 ">
                درباره یونی کٌد
              </p>
            </div>
          </div>
        </div>
      </div>
      <SvgIcons />
    </main>
  );
}
