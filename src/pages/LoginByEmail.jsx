import React, { useEffect } from "react";
import SvgIcons from "../components/assets/icons/SvgIcons";
import { Link } from "react-router-dom";

export default function LoginByEmail() {
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
    <main className=" ">
      <section className="flex justify-center items-center h-screen bg-gray-100 dark:bg-black-500 text-zinc-700">
        <div className="w-100">
          <div className="flex justify-center gap-4 mb-4">
            <img className="w-24 h-[58px]" src="/images/logo.png" alt="logo" />
            <div>
              <h1 className="text-xl dark:text-white font-morabbaBold">
                یونی کٌد
              </h1>
              <p className="tracking-widest dark:text-white">unicode.ir</p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center p-9 bg-white dark:bg-black-400 rounded-3xl shadow-md">
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
            <div className="flex justify-between items-center bg-gray-100 dark:bg-black-300 w-full px-4 py-2 rounded-xl">
              <input
                className="bg-transparent text-xl border-none outline-none dark:text-secondary-600 focus:ring-transparent"
                type="text"
                placeholder="ایمیل"
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#email"></use>
              </svg>
            </div>
            <div className="flex justify-between items-center bg-gray-100 dark:bg-black-300 w-full rounded-xl px-4 py-2 mt-3">
              <input
                className="bg-transparent text-xl border-none outline-none dark:text-secondary-600 focus:ring-transparent"
                type="password"
                placeholder="رمز عبور"
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#lock"></use>
              </svg>
            </div>
            <Link
              to="#"
              className="bg-green-500 text-white text-xl text-center w-full px-28 py-3 rounded-xl mt-5 duration-300 hover:bg-green-400 shadow-md"
            >
              تایید
            </Link>
            <div className="w-full border-t border-gray-100 dark:border-zinc-700 mt-4">
              <div className="flex justify-between items-center mt-4">
                <label htmlFor="#" className="flex items-center gap-2 cursor-pointer">
                  <input
                    className="bg-slate-300 dark:bg-black-500 focus:ring-white border-none rounded-md"
                    type="checkbox"
                    hidden
                  />
                  <span className="w-4 h-4  bg-gray-100 dark:bg-black-500 rounded-sm"></span>
                  <Link
                    to="#"
                    className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary duration-300"
                  >
                    مرا فراموش مکن
                  </Link>
                </label>
                <Link
                  to="#"
                  className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary duration-300"
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
