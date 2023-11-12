import { Link } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";
import { useEffect, useState } from "react";

export default function HamburgerMenu({
  open,
  setIsShowHamburgerMenu,
  setTheme,
  theme,
}) {
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  useEffect(() => {
    open
      ? window.document.body.classList.add("overflow-hidden")
      : window.document.body.classList.remove("overflow-hidden");

    return () => {
      window.document.body.classList.add("overflow-hidden");
    };
  }, [open]);
  return (
    <>
      <div
        className={`${
          open ? "" : "hidden"
        } lg:hidden fixed top-0 right-0 h-screen px-5 bg-white dark:bg-black-300 z-10   ${
          open && "animation-open-menu"
        }`}
      >
        <div
          className="flex items-center pb-2.5 justify-between my-5 border-b border-slate-300 dark:border-secondary-500
        "
        >
          <Link to="/">
            <img
              className="w-[62px]"
              src="/images/logo.png"
              alt="unicode-log"
            />
          </Link>
          <div className="dark:text-white">
            <h1 className="font-morabbaBold text-xl">یونی کٌد</h1>
            <h3 className="font-danaLight text-sm">unicode.ir</h3>
          </div>
          <div onClick={() => setIsShowHamburgerMenu(false)}>
            <svg className="w-9 h-9 dark:text-white">
              <use href="#x-mark"></use>
            </svg>
          </div>
        </div>
        <div>
          <div className="flex items-center w-[217px] h-10 px-1 bg-gray-100 text-white dark:bg-black-500/50 dark:border dark:border-slate-700  rounded-lg">
            <input
              className="h-full bg-transparent outline-none placeholder:font-danaLight"
              type="text"
              placeholder="جستجو"
            />
            <svg className=" w-5 h-5 shrink-0 text-slate-500">
              <use href="#search"></use>
            </svg>
          </div>
          <ul className="my-5">
            <li className="w-full">
              <Link
                className="w-full flex items-center justify-between text-base text-slate-500"
                to="/course-cat/:courseName"
              >
                <span
                  className={`${
                    isShowSubmenu && "text-zinc-700"
                  } mb-1.5 transition-all`}
                >
                  فرانت‌اند
                </span>
                <svg
                  className={`w-5 h-5  ${
                    isShowSubmenu && "text-zinc-700 rotate-180"
                  } transition-all`}
                  onClick={() => {
                    setIsShowSubmenu(!isShowSubmenu);
                  }}
                >
                  <use href="#chevron-down"></use>
                </svg>
              </Link>
              <ul
                className={`text-slate-500 text-sm child:mr-1 ${
                  isShowSubmenu ? "inline-block" : "hidden"
                } mt-3`}
              >
                <li className="relative submenu-hover">
                  <Link to="#">آموزش css</Link>
                </li>
                <li className="relative submenu-hover">
                  <Link to="#">آموزش css</Link>
                </li>
              </ul>
            </li>

            <li className="w-full">
              <Link
                className="w-full flex items-center justify-between text-base text-slate-500"
                to="/blogs"
              >
                <span
                  className={`${
                    isShowSubmenu && "text-zinc-700"
                  } mb-1.5 transition-all`}
                >
                  وبلاگ
                </span>
              </Link>
              <ul
                className={`text-slate-500 text-sm child:mr-1 ${
                  isShowSubmenu ? "inline-block" : "hidden"
                } mt-3`}
              >
                <li className="relative submenu-hover">
                  <Link to="#">آموزش css</Link>
                </li>
                <li className="relative submenu-hover">
                  <Link to="#">آموزش css</Link>
                </li>
              </ul>
            </li>
          </ul>
          <span className="inline-block w-full h-px bg-slate-300 dark:bg-secondary-500 "></span>
        </div>
        <div
          className="flex dark:hidden items-center mb-5"
          onClick={() => setTheme(!theme)}
        >
          <span className="inline-flex items-center justify-center w-9 h-9 ml-2.5 bg-gray-100 text-slate-500 rounded-xl">
            <svg className="w-6 h-6">
              <use href="#moon"></use>
            </svg>
          </span>
          <h3 className="text-base text-slate-500">تم دارک</h3>
        </div>
        <div
          className="hidden dark:flex items-center mb-5"
          onClick={() => setTheme(!theme)}
        >
          <span className="inline-flex items-center justify-center w-9 h-9 ml-2.5 bg-gray-100  dark:bg-black-300 border border-secondary-600 text-slate-500 rounded-xl">
            <svg className="w-6 h-6">
              <use href="#sun"></use>
            </svg>
          </span>
          <h3 className="text-base text-secondary-600">تم روشن</h3>
        </div>
      </div>
      <div
        className={`${
          open ? "inline-block" : "hidden"
        } fixed inset-0 w-screen h-screen bg-zinc-800/50 backdrop-blur-sm`}
        onClick={() =>setIsShowHamburgerMenu(false)}
      ></div>
      <SvgIcons />
    </>
  );
}
