import { Link } from "react-router-dom";
import SvgIcons from "./../assets/icons/SvgIcons";
import { useEffect, useState } from "react";
import HamburgerMenu from "./../HamburgerMenu/HamburgerMenu";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");
  const [isShowHamburgerMenu, setIsShowHamburgerMenu] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);
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
    <>
      <SvgIcons />
      {/* desktop header */}
      <header className=" hidden lg:flex-center max-w-[1920px] h-32 mx-auto px-5 xl:px-9 bg-gray-50 dark:bg-black-500 dark:border-b dark:border-slate-700">
        <div className="flex items-center justify-between w-full">
          {/* right navbar */}
          <div className="flex items-center justify-between shrink-0 my-[60px] ">
            <Link to="/">
              <img
                className="w-[80px] xl:w-[106px]"
                src="/images/logo.png"
                alt="log-img"
              />
            </Link>
            <span className="inline-block w-px h-[58px] bg-gray-100 dark:bg-slate-700 mx-2.5 xl:mr-2.5"></span>
            <ul className="flex items-center child:mx-1.5 xl:child:mx-2.5 lg:child:text-base 2xl:child:text-xl dark:text-white  transition-all delay-75 z-10">
              <li className="relative group">
                <Link
                  className=" flex items-center group-hover:text-green-500"
                  to="/course-cat/:courseName"
                >
                  فرانت‌اند
                  <svg className="w-5 h-5 mr-2">
                    <use href="#chevron-down"></use>
                  </svg>
                </Link>
                <ul className="sub-title">
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link
                  className="flex items-center hover:text-green-500"
                  to="/course-cat/:courseName"
                >
                  امنیت
                  <svg className="w-5 h-5 mr-2">
                    <use href="#chevron-down"></use>
                  </svg>
                </Link>
                <ul className="sub-title">
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link
                  className="flex items-center hover:text-green-500"
                  to="/course-cat/:courseName"
                >
                  پایتون
                  <svg className="w-5 h-5 mr-2">
                    <use href="#chevron-down"></use>
                  </svg>
                </Link>
                <ul className="sub-title">
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                  <li>
                    <Link>آموزش ری اکت</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="hover:text-green-500"
                  to="/course-cat/:courseName"
                >
                  مهارت نرم
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-500"
                  to="/orders"
                >
                  سفارش پروژه
                </Link>
              </li>
              <li className="relative group">
                <Link
                  className="flex items-center hover:text-green-500"
                  to="/blogs"
                >
                  مقالات
                  <svg className="w-5 h-5 mr-2">
                    <use href="#chevron-down"></use>
                  </svg>
                </Link>
                <ul className="sub-title">
                  <li>
                    <Link>پایتون vs جاوا اسکریپت</Link>
                  </li>
                  <li>
                    <Link>برنامه نویسی چیست؟</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* left navbar */}
          <div className="flex items-center">
            <div className="relative  flex items-center justify-center xl:justify-normal  w-14 xl:w-auto h-14 xl:h-14 px-2.5 bg-gray-100 dark:bg-black-500 dark:border dark:border-slate-700 text-slate-500 rounded-full">
              <input
                className="hidden xl:inline
                lg:w-[150px] 2xl:w-auto h-full bg-transparent outline-none placeholder:font-danaLight"
                type="text"
                placeholder="جستجو"
              />
              <svg
                className=" w-6 h-6 cursor-pointer "
                onClick={() => setIsShowInput(!isShowInput)}
              >
                <use href="#search"></use>
              </svg>
              <div
                className={`${
                  isShowInput ? "inline-block" : "hidden"
                } absolute top-16 left-0 xl:hidden flex items-center
                h-full px-2.5 bg-white dark:bg-black-300 border border-r-slate-300 dark:border-secondary-500 rounded-xl`}
              >
                <input
                  className="h-full
                  bg-transparent outline-none text-zinc-700 dark:text-white text-base placeholder:font-danaLight"
                  type="text"
                  placeholder="جستجو"
                />
                <svg className=" w-6 h-6 cursor-pointer ">
                  <use href="#search"></use>
                </svg>
              </div>
            </div>
            <div
              className="flex-center w-14 h-14 mx-4 xl:mx-9 bg-gray-100 hover:bg-gray-200 dark:bg-black-500 dark:border dark:border-slate-700 dark:hover:border-slate-400 rounded-full cursor-pointer transition-all delay-75"
              onClick={() => setTheme(!theme)}
            >
              <svg className="dark:hidden w-6 h-6 text-slate-500">
                <use href="#moon"></use>
              </svg>
              <svg className="hidden dark:block w-6 h-6 text-slate-500 ">
                <use href="#sun"></use>
              </svg>
            </div>
            <div className="relative flex items-center w-[161px] h-14 text-lg child:transition-colors child:delay-75">
              <Link
                className=" lg:w-[85%] 2xl:w-full h-full bg-sky-300 dark:bg-secondary-200 hover:bg-sky-400 dark:hover:bg-secondary-100 text-white rounded-full"
                to="/login"
              >
                <span className="inline-block mt-4 pr-4">ورود</span>
              </Link>
              <Link
                className="absolute z-10 lg:left-6 2xl:left-0 flex-center lg:w-20 2xl:w-25 h-full bg-sky-500 dark:bg-secondary-300 hover:bg-sky-600 dark:hover:bg-secondary-400 text-white rounded-full"
                to="/signup"
              >
                <span>عضویت</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* mobile header */}
      <header className="flex lg:hidden items-center h-[88px] px-9 bg-gray-50 dark:bg-black-500">
        <div className="flex items-center justify-between w-full">
          <div onClick={() => setIsShowHamburgerMenu(true)}>
            <svg className="w-9 h-9 dark:text-white">
              <use href="#bars"></use>
            </svg>
          </div>
          <Link to="/">
            <img
              className="w-[81px] h-[51px]"
              src="/images/logo.png"
              alt="unicode-logo"
            />
          </Link>
          <div className="relative flex-center w-12 h-12 bg-gray-200/70 dark:bg-black-400/70 overflow-hidden rounded-full cursor-pointer">
            <Link to="/login">
              <svg className=" w-6 h-6 text-gray-500 dark:text-secondary-600">
                <use href="#user-login"></use>
              </svg>
            </Link>
          </div>
        </div>
      </header>
      <HamburgerMenu
        open={isShowHamburgerMenu}
        theme={theme}
        setIsShowHamburgerMenu={setIsShowHamburgerMenu}
        setTheme={setTheme}
      />
    </>
  );
}
