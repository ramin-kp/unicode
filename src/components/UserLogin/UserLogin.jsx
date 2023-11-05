import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserLogin() {
  const [isShowUser, setIsShowUser] = useState(false);

  return (
    <>
      <div
        className="relative w-12 h-12 bg-gray-300 overflow-hidden rounded-full cursor-pointer"
        onClick={() => setIsShowUser(!isShowUser)}
      >
        <svg className="w-12 h-12 mt-2 text-white">
          <use href="#user"></use>
        </svg>
      </div>
      <div
        className={`${
          isShowUser ? "inline-block" : "hidden"
        } absolute top-20 left-10 w-[278px] bg-white dark:bg-black-300 p-6 rounded-2xl shadow-xl`}
      >
        <div className="flex items-start border-b w-[230px] pb-5 border-gray-200 dark:border-secondary-500">
          <div className="w-14 h-14 shrink-0 ml-3 object-cover overflow-hidden rounded-full">
            <img src="./images/teacher.jpg" alt="user-avatar" />
          </div>
          <div>
            <h1 className=" w-full text-lg dark:text-white line-clamp-1">
              رامین کریم پور بناب
            </h1>
            <h3 className=" mt-1.5 text-sky-500 dark:text-secondary-300 font-danaMedium text-sm">
              موجودی:120تومان
            </h3>
          </div>
        </div>
        <ul className="my-1.5 text-zinc-700 dark:text-white border-b border-gray-200 dark:border-secondary-500">
          <li className="my-1  p-3 hover:bg-gray-200/60 dark:hover:bg-secondary-500/60 rounded-xl">
            <Link className="flex items-center  " to="#">
              <svg className="w-6 h-6 ml-2.5">
                <use href="#home"></use>
              </svg>
              پیشخوان
            </Link>
          </li>
          <li className="my-1  p-3 hover:bg-gray-200/60 dark:hover:bg-secondary-500/60 rounded-xl">
            <Link className="flex items-center " to="#">
              <svg className="w-6 h-6 ml-2.5">
                <use href="#folder"></use>
              </svg>
              دوره‌های من
            </Link>
          </li>
          <li className="my-1  p-3 hover:bg-gray-200/60 dark:hover:bg-secondary-500/60 rounded-xl">
            <Link className="flex items-center " to="#">
              <svg className="w-6 h-6 ml-2.5">
                <use href="#chat"></use>
              </svg>
              تیکت های پشتیبانی
            </Link>
          </li>
        </ul>
        <div className="mt-1.5 p-3 text-zinc-700 dark:text-white hover:bg-gray-200/60 dark:hover:bg-secondary-500/60 rounded-xl">
          <Link className="flex items-center " to="#">
            <svg className="w-6 h-6 ml-2.5">
              <use href="#logout"></use>
            </svg>
            خروج
          </Link>
        </div>
      </div>
    </>
  );
}
