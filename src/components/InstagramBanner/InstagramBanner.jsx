import React from "react";
import { Link } from "react-router-dom";

export default function InstagramBanner() {
  return (
    <section>
      <div className="container">
        <div className="lg:flex items-center justify-between w-full lg:h-[144px] px-[30px] py-5 lg:p-16 mt-5 mb-9 lg:my-28 bg-gradient-to-br lg:bg-gradient-to-r from-purple-700 via-pink-700 to-amber-400 rounded-2xl">
          <div>
            <h1 className="font-morabbaBold text-4xl text-center lg:text-right lg:text-[40px] text-white">
              پیچ اینستاگرامی یونی کٌد
            </h1>
            <p className="mt-10 lg:mt-9 font-danaMedium text-lg lg:text-2xl text-center lg:text-right text-white">
              تموم اطلاع رسانی ها و مطالب جدید در پیج آکادمی قرار می‌گیرد
            </p>
          </div>
          <Link
            className="flex-center w-[50%] mx-auto lg:mx-0 lg:w-auto h-12 lg:h-[56px] px-4 lg:px-[42px] py-2.5 lg:py-1.5  mt-6 lg:mt-0 hover:bg-white border border-white rounded-2xl transition-all group"
            to="#"
          >
            <span className="font-danaBold text-base lg:text-2xl text-white group-hover:text-purple-600">
              مشاهده پیج
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
