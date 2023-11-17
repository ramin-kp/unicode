import React, { useContext, useState } from "react";
import SvgIcons from "../assets/icons/SvgIcons";
import UserContext from "../../context/UserContext/UserContext";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [isShowProfile, setIsShowProfile] = useState(false);
  const userContext = useContext(UserContext);
  return (
    <div>
      <div className="relative flex items-end justify-center w-14 h-14 bg-gray-200 rounded-full">
        <svg className="w-[50px] h-[50px] text-white">
          <use href="#user"></use>
        </svg>
      </div>
      <div className="fixed top-25 left-10 flex flex-col p-6 bg-white dark:bg-black-300 rounded-2xl">
        <div className="flex items-center justify-normal pb-5 border-b border-gray-200 object-cover">
          <div className="flex items-end justify-center w-14 h-14 bg-gray-200 rounded-full ml-3">
            <svg className="w-[50px] h-[50px] text-white">
              <use href="#user"></use>
            </svg>
          </div>
          <div>
            <p className="w-40 mb-1.5 font-danaMedium text-lg text-zinc-700  line-clamp-1">
              {userContext.userInfos.name}
            </p>
            <span className=" font-danaMedium text-sm text-sky-500">{`موجودی:0تومان`}</span>
          </div>
        </div>
        <ul className="pb-1.5 child:mt-1.5 child:p-3 hover:child:bg-gray-200 child:rounded-xl border-b border-gray-200 child:cursor-pointer child:transition-all">
          <li>
            <Link
              className="flex items-center text-base text-zinc-700"
              to="#"
            >
              <svg className="w-5 h-5 ml-2.5 ">
                <use href="#home"></use>
              </svg>
              پیشخوان
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-base text-zinc-700"
              to="#"
            >
              <svg className="w-5 h-5 ml-2.5 ">
                <use href="#folder"></use>
              </svg>
              دوره‌های من
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-base text-zinc-700"
              to="#"
            >
              <svg className="w-5 h-5 ml-2.5 ">
                <use href="#chat"></use>
              </svg>
              تیکت های پشتیبانی
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-start p-3 mt-1.5 hover:bg-gray-200 text-zinc-700 rounded-xl cursor-pointer transition-all">
          <svg className="w-5 h-5 ml-2.5">
            <use href="#logout"></use>
          </svg>
          خروج
        </div>
      </div>
      <SvgIcons />
    </div>
  );
}
