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
    <main class="h-screen bg-gray-100 dark:bg-black-500 text-zinc-700">
      <section class="flex justify-center items-center h-full">
        <div class="w-[400px]">
          <div class="flex justify-center gap-4 mb-4">
            <img className="w-24 h-58" src="/images/logo.png" alt="logo" />
            <div>
              <h1 class="text-xl dark:text-white font-danaBold">یونی کٌد</h1>
              <p class="dark:text-white tracking-widest">unicode.ir</p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center max-h-115 bg-white dark:bg-black-400 rounded-3xl px-9 py-8 shadow-md">
            <h2 class="text-2xl dark:text-white font-danaBold">عضویت</h2>
            <p class="text-zinc-700 dark:text-secondary-600 pt-4 pb-10">
              قبلا ثبت نام کرده اید؟
              <Link to="/login" class="text-green-500 hover:text-green-400">
                وارد شوید
              </Link>
            </p>
            <div class="flex justify-between items-center w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3">
              <input
                class="bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="text"
                placeholder="نام کاربری"
              />
              <svg class="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#user-outline"></use>
              </svg>
            </div>
            <div class="flex justify-between items-center w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <input
                class="bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="text"
                placeholder="شماره موبایل"
              />
              <svg class="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#phone"></use>
              </svg>
            </div>
            <div class="flex justify-between items-center w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <input
                class="bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="text"
                placeholder="ایمیل"
              />
              <svg class="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#email"></use>
              </svg>
            </div>
            <div class="flex justify-between items-center w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <input
                class="bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="password"
                placeholder="رمز عبور"
              />
              <svg class="w-5 h-5 text-slate-500 dark:text-secondary-600">
                <use href="#lock"></use>
              </svg>
            </div>
            <Link
              to="#"
              class="w-full bg-green-500 text-white text-xl text-center rounded-xl px-28 py-3 mt-5 duration-300 hover:bg-green-400 shadow-md"
            >
              ادامه
            </Link>
          </div>
          <p class="text-lg dark:text-secondary-600 mt-6">
            با عضویت در سایت، تمامی{" "}
            <span class="text-primary mt-4">شرایط و قوانین</span> استفاده‌از
            خدمت یونی کٌد را پذیرفته اید.
          </p>
        </div>
      </section>
      <SvgIcons />
    </main>
  );
}
