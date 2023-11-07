import React from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";

export default function Footer() {
  return (
    <footer className="bg-white px-3 lg:px-0 mt-20 dark:bg-black-500 dark:border-t dark:border-slate-700">
      <div className="container">
        <div className="flex flex-wrap gap-x-4 lg:gap-x-0 gap-y-5 lg:gap-y-0 items-start justify-between mx-auto mb-2.5 pt-10 border-b border-slate-300 dark:border-slate-700">
          <div className="">
            <h1 className="font-danaMedium  text-2xl text-center sm:text-right text-zinc-700 dark:text-white">
              درباه‌ما
            </h1>
            <p className="mt-2.5 sm:max-w-[260px] font-danaLight text-right text-lg text-slate-500 dark:text-slate-400">
              یونی کٌد یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل
              نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکن
            </p>
          </div>
          <div className="">
            <h1 className="font-danaMedium text-2xl text-zinc-700 dark:text-white">
              دسترسی سریع
            </h1>
            <ul className="child:my-[15px] font-danaMedium text-lg text-slate-500 dark:text-slate-400 child-hover:text-green-500 child:transition-all">
              <li>
                <Link>شرایط و قوانین</Link>
              </li>
              <li>
                <Link>ارسال تیکت</Link>
              </li>
              <li>
                <Link>همه دوره‌ها</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-danaMedium text-2xl text-zinc-700 dark:text-white">
              لینک های مفید
            </h1>
            <ul className="child:my-[15px] font-danaMedium text-lg text-slate-500 dark:text-slate-400 child-hover:text-green-500 child:transition-all">
              <li>
                <Link>آموزش جاوا اسکریپت</Link>
              </li>
              <li>
                <Link>آموزش تلویند</Link>
              </li>

              <li>
                <Link>آموزش پایتون</Link>
              </li>

              <li>
                <Link>آموزش ری اکت</Link>
              </li>
            </ul>
          </div>
          <div className="mt-2.5 lg:mt-0">
            <h1 className="font-danaMedium text-2xl text-zinc-700 dark:text-white">
              شبکه های اجتماعی
            </h1>
            <div className="child:my-[15px] font-danaDemiBold text-lg text-slate-500 dark:text-slate-400 child-hover:text-green-500 child:transition-all">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 ml-1.5"
                  src="/images/instagram.png"
                  alt="instagram-icon"
                />
                <Link className="text-direction" to="https://www.instagram.com/ramin._kp/">
                  <span >@unicode</span>
                </Link>
              </div>
              <div className="flex items-center">
                <img
                  className="w-8 h-8 ml-1.5"
                  src="/images/telegram.png"
                  alt="instagram-icon"
                />
                <Link
                  className="text-direction"
                  to="https://t.me/ramin_kp81"
                >
                  <span>@unicode</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex items-center justify-between py-4 child:text-slate-500 dark:child:text-slate-400">
          <div className="text-center md:text-right text-base">
            ساخته شده با ❤️ در یونی کٌد
          </div>
          <div className="text-direction text-center md:text-left mt-1.5 lg:mt-0 text-base">
            Copyright © unicode. All rights reserved.
          </div>
        </div>
        <SvgIcons />
      </div>
    </footer>
  );
}
