import React from "react";
import SvgIcons from "../assets/icons/SvgIcons";
import { Link } from "react-router-dom";

export default function ArticlesBox() {
  return (
    <div className="dark:border border-zinc-700 overflow-hidden rounded-xl shadow-md">
      <div>
        <img
          className="rounded-xl"
          src="/images/blog-1.png"
          alt="article-img-"
        />
      </div>
      <div className="mx-2.5">
        <div className="mt-7 mb-9">
          <Link
            className="mb-1.5 text-zinc-700 font-danaMedium text-xl dark:text-white "
            to="/blog/example"
          >
            محیط های برنامه نویسی پایتون + راهنمایی انتخاب
          </Link>
          <h4 className="text-slate-500 dark:text-slate-400 font-danaLight text-sm">
            هوش مصنوعی داره جهان رو در بر میگیره و به سرعت درحال پیشرفته و همین
            پیشرفتش باعث...
          </h4>
        </div>
        <div className="flex items-center justify-between child:text-slate-500 dark:child:text-secondary-600">
          <div className="flex items-center">
            <Link
              className="flex items-center hover:text-green-500 transition-all"
              to="#"
            >
              <svg className="w-5 h-5 ml-1.5">
                <use href="#user-outline"></use>
              </svg>
              <span>رامین کریم پور</span>
            </Link>
            <div className="flex items-center mr-1.5">
              <svg className="w-5 h-5 ml-1.5">
                <use href="#calendar"></use>
              </svg>
              <span>1402/05/05</span>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center mt-4 py-[18px]  border-t border-slate-200 dark:border-secondary-600/10 transition-colors">
          <Link
            className="flex items-start justify-center font-danaMedium text-base dark:text-white text-zinc-700 hover:text-green-500 dark:child:hover:text-green-500"
            to="#"
          >
            <span>مطالعه مقاله</span>
            <svg className="w-5 h-5 mr-1 dark:text-white">
              <use href="#arrow-solid"></use>
            </svg>
          </Link>
        </div>
      </div>
      <SvgIcons />
    </div>
  );
}
