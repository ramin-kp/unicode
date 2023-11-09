import React from "react";
import SvgIcons from "../assets/icons/SvgIcons";

export default function CommentBox() {
  return (
    <>
      {/* Comment-desktop */}
      <div className="hidden lg:flex items-start justify-center gap-5 px-5 py-6 bg-gray-100 dark:bg-black-300 rounded-2xl">
        {/* user-avatar */}
        <div className="shrink-0 flex flex-col items-center gap-y-2">
          <img
            className="shrink-0 w-[63px] h-[63px] rounded-full object-cover"
            src="/images/teacher.jpg"
            alt="user-avatar"
          />
          <span className="inline-block px-3 bg-slate-500 dark:bg-black-200 text-white dark:text-slate-400 text-xs rounded">
            کاربر
          </span>
          {/* for-students */}
          {/* <span className="inline-block px-3 bg-green-500 dark:bg-green-500/20 text-white dark:text-green-500 text-xs rounded">
          دانشجو
        </span> */}
        </div>
        {/* comment-title */}
        <div className="flex flex-col gap-y-2">
          <div className="flex items-end justify-between w-full">
            <div>
              <h1 className="font-danaMedium text-xl dark:text-white">
                ramin.kp
              </h1>
              <span className="font-danaLight text-slate-500 dark:text-slate-400">
                1402/02/23
              </span>
            </div>
            <svg className="w-7 h-7 text-slate-500">
              <use href="#arrow-uturn-left"></use>
            </svg>
          </div>
          <p className="font-danaLight text-xl text-zinc-700 dark:text-white">
            سلام استادمن به شدت تو ساختمان داده و الگوریتم مشکل دارم. یعنی از
            ۱۰۰ به خودم ۲۰ یا ۳۰ میدم.امیدوارم تو این دوره یا دوره‌های دیگه‌ به
            این مباحث به صورت کامل و جامع پرداخته بشه.
          </p>
          {/* Teacher-reply */}
          <div className="flex gap-5 p-4 my-5 bg-gray-200 dark:bg-black-100 rounded-2xl">
            <div className="shrink-0 flex flex-col items-center gap-y-2">
              <img
                className="shrink-0 w-[63px] h-[63px] rounded-full object-cover"
                src="/images/logo.png"
                alt="user-avatar"
              />
              <span className="inline-block px-3 bg-sky-500 dark:bg-secondary-300/20 text-white dark:text-secondary-300 text-xs rounded">
                مدرس
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-danaMedium text-xl dark:text-white">
                رامین کریم پور
              </h1>
              <span className="font-danaLight text-slate-500 dark:text-slate-400">
                1402/02/23
              </span>
              <p className="font-danaLight text-xl text-zinc-700 dark:text-white">
                سلام عزیز. تو این دوره در حد نیاز به مباحث ساختمان داده و
                الگوریتم پرداخته میشه ❤️
              </p>
            </div>
          </div>
        </div>

        <SvgIcons />
      </div>

      {/* Comment-mobile */}
      <div className="flex flex-col lg:hidden items-start gap-5 px-2 py-3 bg-gray-100 dark:bg-black-300 rounded-2xl">
        {/* user-avatar */}
        <div className="shrink-0 flex items-center justify-between w-full">
          <div className="flex gap-x-2.5">
            <img
              className="shrink-0 w-10 h-10 rounded-full object-cover"
              src="/images/teacher.jpg"
              alt="user-avatar"
            />
            <div>
              <h1 className="font-danaMedium text-base dark:text-white">
                ramin.kp
              </h1>
              <span className="inline-block px-3 bg-slate-500 dark:bg-black-200 text-white dark:text-slate-400 text-xs rounded">
                کاربر
              </span>
              <span className="mr-2.5 font-danaLight text-xs text-slate-500 dark:text-slate-400">
                1402/02/23
              </span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <svg className="w-6 h-6 text-slate-500">
              <use href="#arrow-uturn-left"></use>
            </svg>
          </div>
        </div>
        {/* Teacher-Text */}
        <div className="flex flex-col gap-y-2">
          <p className="font-danaLight text-xl text-zinc-700 dark:text-white">
            سلام استادمن به شدت تو ساختمان داده و الگوریتم مشکل دارم. یعنی از
            ۱۰۰ به خودم ۲۰ یا ۳۰ میدم.امیدوارم تو این دوره یا دوره‌های دیگه‌ به
            این مباحث به صورت کامل و جامع پرداخته بشه.
          </p>
          {/* Teacher-reply */}
          <div className="flex gap-5 p-4 mt-2 bg-gray-200 dark:bg-black-100 rounded-2xl">
            <div className="shrink-0 flex flex-col items-center gap-y-2">
              <img
                className="shrink-0 w-10 h-10 rounded-full object-cover"
                src="/images/logo.png"
                alt="user-avatar"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-danaMedium text-base dark:text-white">
                رامین کریم پور
              </h1>
              <div>
                <span className="inline-block px-3 bg-sky-500 dark:bg-secondary-300/20 text-white dark:text-secondary-300 text-xs rounded">
                  مدرس
                </span>
                <span className="mr-2.5 font-danaLight text-xs text-slate-500 dark:text-slate-400">
                  1402/02/23
                </span>
              </div>

              <p className="font-danaLight text-xl text-zinc-700 dark:text-white">
                سلام عزیز. تو این دوره در حد نیاز به مباحث ساختمان داده و
                الگوریتم پرداخته میشه ❤️
              </p>
            </div>
          </div>
        </div>
        <SvgIcons />
      </div>
    </>
  );
}
