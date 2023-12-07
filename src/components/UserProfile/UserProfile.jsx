import React, { useContext, useEffect, useState } from "react";
import SvgIcons from "../assets/icons/SvgIcons";
import UserContext from "../../context/UserContext/UserContext";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [isShowProfile, setIsShowProfile] = useState(false);
  const [userRole, setUserRole] = useState("");
  const userContext = useContext(UserContext);
  console.log(userRole);
  useEffect(() => {
    if (userContext) {
      setUserRole(userContext.userInfos.role);
    }
  }, []);
  useEffect(() => {
    if (isShowProfile) {
      window.document.body.classList.add("overflow-hidden");
    } else {
      window.document.body.classList.remove("overflow-hidden");
    }
  }, [isShowProfile]);
  return (
    <section className="">
      <div className="container">
        <div
          className={`relative top-full flex items-end justify-center w-14 h-14 bg-gray-200 rounded-full cursor-pointer ${
            isShowProfile && "z-50"
          }`}
          onClick={() => setIsShowProfile((prev) => !prev)}
        >
          <svg className="w-[50px] h-[50px] text-white">
            <use href="#user"></use>
          </svg>
        </div>
        {/* profile-box */}
        {isShowProfile && (
          <div
            className={`absolute top-25 left-10 flex flex-col p-6 bg-white dark:bg-black-300 rounded-2xl  ${
              isShowProfile && "z-50"
            }`}
          >
            <div
              className={`flex items-center justify-normal pb-5 border-b border-gray-200 dark:border-zinc-700 object-cover`}
            >
              <div className="flex items-end justify-center w-14 h-14 bg-gray-200 rounded-full ml-3">
                <svg className="w-[50px] h-[50px] text-white">
                  <use href="#user"></use>
                </svg>
              </div>
              <div>
                <p className="w-40 mb-1.5 font-danaMedium text-lg text-zinc-700 dark:text-white  line-clamp-1">
                  {userContext.userInfos.name}
                </p>
                <span className=" font-danaMedium text-sm text-sky-500 dark:text-secondary-300">{`موجودی:0تومان`}</span>
              </div>
            </div>
            <ul className="pb-1.5 child:mt-1.5 child:p-3 hover:child:bg-gray-200 dark:hover:child:bg-black-100 child:rounded-xl border-b border-gray-200 dark:border-zinc-700 child:cursor-pointer child:transition-all">
              {userRole === "ADMIN" && (
                <li>
                  <Link
                    className="flex items-center text-base text-zinc-700 dark:text-white"
                    to="/p-admin"
                  >
                    <svg className="w-5 h-5 ml-2.5 ">
                      <use href="#seting"></use>
                    </svg>
                    پنل ادمین
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className="flex items-center text-base text-zinc-700 dark:text-white"
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
                  className="flex items-center text-base text-zinc-700 dark:text-white"
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
                  className="flex items-center text-base text-zinc-700 dark:text-white"
                  to="#"
                >
                  <svg className="w-5 h-5 ml-2.5 ">
                    <use href="#chat"></use>
                  </svg>
                  تیکت های پشتیبانی
                </Link>
              </li>
            </ul>
            <div
              className="flex items-center justify-start p-3 mt-1.5 hover:bg-gray-200  dark:hover:bg-black-100 text-zinc-700 dark:text-white rounded-xl cursor-pointer transition-all"
              onClick={() => userContext.logout()}
            >
              <svg className="w-5 h-5 ml-2.5">
                <use href="#logout"></use>
              </svg>
              خروج
            </div>
          </div>
        )}
      </div>
      <div
        className={`${
          isShowProfile ? "inline-block" : "hidden"
        } absolute inset-0 left-full bg-zinc-950/50 backdrop-blur-md w-screen h-screen z-20`}
        onClick={() => setIsShowProfile(false)}
      ></div>
      <SvgIcons />
    </section>
  );
}
