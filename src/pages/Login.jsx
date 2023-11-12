import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../components/assets/icons/SvgIcons";

export default function Login() {
  const theme = localStorage.getItem("theme") === "dark";
  useEffect(() => {
    theme
      ? window.document.documentElement.classList.add("dark")
      : window.document.documentElement.classList.remove("dark");
    return () => {
      theme
        ? window.document.documentElement.classList.add("dark")
        : window.document.documentElement.classList.remove("dark");
    };
  }, [theme]);
  return (
    <main>
      <section className="flex justify-center items-center bg-gray-100 dark:bg-black-500 text-zinc-700 h-screen">
        <div className="w-100">
          <div className="flex justify-center gap-4 mb-4">
            <img className="w-24 h-14" src="/images/logo.png" alt="logo-iئل" />
            <div>
              <h1 className="text-xl dark:text-white font-morabbaBold">
                یونی کٌد
              </h1>
              <p className="tracking-widest dark:text-white">unicode.ir</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-9 bg-white dark:bg-black-400  rounded-3xl shadow-md">
            <h2 className="text-2xl dark:text-white font-danaBold">ورود</h2>
            <p className="pt-4 pb-10 text-zinc-700 dark:text-secondary-600">
              حساب کاربری ندارید؟
              <Link
                to="/signup"
                className="text-green-500 hover:text-green-400 duration-300"
              >
                ثبت نام
              </Link>
            </p>
            <div className="flex justify-between items-center bg-gray-100 dark:bg-black-300 w-full rounded-xl px-4 py-3">
              <input
                className="bg-gray-100 text-xl bg-transparent border-none outline-none dark:text-secondary-600"
                type="number"
                placeholder="شماره موبایل"
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#phone"></use>
              </svg>
            </div>
            <Link
              to="#"
              className="bg-green-500 text-white text-xl text-center w-full px-28 py-3 rounded-xl mt-6 duration-300 hover:bg-green-600 shadow-md"
            >
              تایید
            </Link>
            <div className="w-full border-t border-gray-100 dark:border-zinc-700 mt-4">
              <div className="flex justify-between items-center pt-4">
                <Link
                  to="/login/email"
                  className="text-slate-500 dark:text-slate-400 text-sm"
                >
                  ورود با ایمیل
                </Link>
                <Link
                  to="#"
                  className="text-slate-500 dark:text-slate-400 text-sm"
                >
                  حریم خصوصی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SvgIcons />
    </main>
  );
}
