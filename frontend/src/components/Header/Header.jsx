import { Link } from "react-router-dom";
import SvgIcons from "./../assets/icons/SvgIcons";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    const darkModHandler = () => {
      const root = window.document.documentElement;
      if (theme) {
        localStorage.setItem("theme", "dark");
        root.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        root.classList.remove("dark");
      }
    };
    darkModHandler();
  }, [theme]);

  return (
    <header className="max-w-[1920px] h-32 flex items-center px-9 bg-white dark:bg-black-500 dark:border-b dark:border-slate-700">
      <SvgIcons />
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between my-[60px] ">
          <Link to="/">
            <img className="w-[106px]" src="/images/logo.png" alt="log-img" />
          </Link>
          <span className="inline-block w-px h-[58px] bg-gray-100 dark:bg-slate-700 mr-2.5"></span>
          <ul className="flex items-center child:mx-2.5 child:text-lg dark:text-white child-hover:text-green-500 transition-all delay-75">
            <li>
              <Link className="flex items-center" to="/">
                فرانت‌اند
                <svg className="w-5 h-5 mr-2">
                  <use href="#chevron-down"></use>
                </svg>
              </Link>
            </li>
            <li>
              <Link className="flex items-center" to="/">
                امنیت
                <svg className="w-5 h-5 mr-2">
                  <use href="#chevron-down"></use>
                </svg>
              </Link>
            </li>
            <li>
              <Link className="flex items-center" to="/">
                پایتون
                <svg className="w-5 h-5 mr-2">
                  <use href="#chevron-down"></use>
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/">مهارت نرم</Link>
            </li>
            <li>
              <Link to="/">سفارش پروژه</Link>
            </li>
            <li>
              <Link className="flex items-center" to="/">
                مقالات
                <svg className="w-5 h-5 mr-2">
                  <use href="#chevron-down"></use>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="flex items-center h-14 px-2.5 bg-gray-100 dark:bg-black-500 dark:border dark:border-slate-700 text-slate-500 rounded-full">
            <input
              className="h-full bg-transparent outline-none placeholder:font-danaLight"
              type="text"
              placeholder="جستجو"
            />
            <svg className=" w-6 h-6 ">
              <use href="#search"></use>
            </svg>
          </div>
          <div
            className="flex-center w-14 h-14 mx-9 bg-gray-100 dark:bg-black-500 dark:border dark:border-slate-700 rounded-full cursor-pointer"
            onClick={() => setTheme(!theme)}
          >
            <svg className="dark:hidden w-5 h-5 text-slate-500">
              <use href="#moon"></use>
            </svg>
            <svg className="hidden dark:block w-6 h-6 text-slate-500 ">
              <use href="#sun"></use>
            </svg>
          </div>
          <div className="relative flex items-center w-[161px] h-14 text-lg child:transition-colors child:delay-75">
            <Link
              className="absolute w-full h-full bg-sky-300 dark:bg-secondary-200 hover:bg-sky-400 dark:hover:bg-secondary-100 text-white rounded-full"
              to="ramin"
            >
              <span className="inline-block mt-4 pr-4">ورود</span>
            </Link>
            <Link
              className="absolute z-10 left-0 flex-center w-25 h-full bg-sky-500 dark:bg-secondary-300 hover:bg-sky-600 dark:hover:bg-secondary-400 text-white rounded-full"
              to="amin"
            >
              <span to="/">عضویت</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
