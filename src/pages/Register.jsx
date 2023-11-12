import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../components/assets/icons/SvgIcons";

export default function Register() {
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
    <main className="h-screen bg-gray-100 dark:bg-black-500 text-zinc-700">
      <section className="flex justify-center items-center h-full">
        <div className="w-[400px]">
          <div className="flex justify-center gap-4 mb-4">
            <img className="w-24 h-58" src="/images/logo.png" alt="logo" />
            <div>
              <h1 className="text-xl dark:text-white font-morabbaBold">
                یونی کٌد
              </h1>
              <p className="dark:text-white tracking-widest">unicode.ir</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-h-115 bg-white dark:bg-black-400 rounded-3xl px-9 py-8 shadow-md">
            <h2 className="text-2xl dark:text-white font-danaBold">عضویت</h2>
            <p className="text-zinc-700 dark:text-secondary-600 pt-4 pb-10">
               قبلا ثبت نام کرده اید؟ 
              <Link to="/login" className="text-green-500 hover:text-green-400">
                 وارد شوید 
              </Link>
            </p>
            <div className="flex justify-between items-center gap-x-3 w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3">
              <input
                className="grow px-1 bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="text"
                placeholder="نام کاربری"
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#user-outline"></use>
              </svg>
            </div>
            <div className="flex justify-between items-center gap-x-3 w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <input
                className="grow px-1 bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="text"
                placeholder="شماره موبایل"
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#phone"></use>
              </svg>
            </div>
            <div className="flex justify-between items-center gap-x-3 w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <input
                className="grow px-1 bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="text"
                placeholder="ایمیل"
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#email"></use>
              </svg>
            </div>
            <div className="flex justify-between items-center gap-x-3 w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <input
                className="grow px-1 bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="password"
                placeholder="رمز عبور"
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-secondary-600">
                <use href="#lock"></use>
              </svg>
            </div>
            <Link
              to="#"
              className="w-full bg-green-500 text-white text-xl text-center rounded-xl px-28 py-3 mt-5 duration-300 hover:bg-green-400 shadow-md"
            >
              ادامه
            </Link>
          </div>
          <p className="text-lg dark:text-secondary-600 mt-6">
            با عضویت در سایت، تمامی{" "}
            <span className="text-primary mt-4">شرایط و قوانین</span> استفاده‌از
            خدمت یونی کٌد را پذیرفته اید.
          </p>
        </div>
      </section>
      <SvgIcons />
    </main>
  );
}
