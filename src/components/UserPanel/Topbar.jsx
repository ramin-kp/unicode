import React, { useCallback, useContext, useEffect, useState } from "react";
import SvgIcons from "../assets/icons/SvgIcons";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import UserContext from "../../context/UserContext/UserContext";
import UserProfile from "../UserProfile/UserProfile";

export default function Topbar() {
  const [theme, steTheme] = useState(localStorage.getItem("theme"));
  const [adminData, setAdminData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isShowNotification, setIsShowNotification] = useState(false);
  const [userData, setUserData] = useState({});
  const userContext = useContext(UserContext);
  useEffect(() => {
    setUserData(() => userContext.userInfos);
  }, [userContext]);

  //   const seeNotification = useCallback(async (notificationId) => {
  //     const localStorageData = JSON.parse(localStorage.getItem("user"));
  //     try {
  //       const fetchSeeNotification = await fetch(
  //         `http://localhost:4000/v1/notifications/see/${notificationId}`,
  //         {
  //           method: "PUT",
  //           headers: {
  //             Authorization: `Bearer ${localStorageData.token}`,
  //           },
  //         }
  //       );
  //       if (!fetchSeeNotification.status === 200) {
  //         throw new Error();
  //       }
  //     } catch (error) {
  //       swal({
  //         icon: "error",
  //         title: "مشکلی پیش آمده",
  //         button: "باشه",
  //       });
  //     }
  //     getAdminData();
  //   }, []);

  //   useEffect(() => {
  //     getAdminData();
  //   }, []);
  useEffect(() => {
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const darkModHandler = () => {
    steTheme("dark");
    localStorage.setItem("theme", "dark");
  };
  const lightModHandler = () => {
    steTheme("light");
    localStorage.setItem("theme", "light");
  };
  //   const getAdminData = async () => {
  //     const localeStorageData = JSON.parse(localStorage.getItem("user"));
  //     const fetchData = await fetch("http://localhost:4000/v1/auth/me", {
  //       headers: {
  //         Authorization: `Bearer ${localeStorageData.token}`,
  //       },
  //     });
  //     const json = await fetchData.json();
  //     setAdminData(json);
  //     setNotifications(json.notifications);
  //   };

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-danaDemiBold text-zinc-700 dark:text-white text-2xl">
        {userData && userData.name} عزیز؛ خوش اومدی 🙌
      </h1>
      <div className="flex gap-x-6">
        <span
          className="relative flex-center bg-white dark:bg-black-400 w-14 h-14 rounded-full cursor-pointer"
          onClick={() => setIsShowNotification((prevData) => !prevData)}
        >
          {/* {notifications.length ? (
            <span className="absolute -top-1 right-0 flex-center w-6 h-6 bg-red-600 dark:bg-red-500 text-white rounded-full">
              {notifications.length}
            </span>
          ) : (
            ""
          )} */}
          <svg className="w-6 h-6 text-slate-500 dark:text-gray-600">
            <use href="#bell"></use>
          </svg>
          <ul
            className={`${
              isShowNotification ? "block" : "hidden"
            } absolute top-16 left-1/4 w-[300px] p-2.5 bg-white dark:bg-black-400 rounded-2xl`}
            onMouseLeave={() => setIsShowNotification(false)}
          >
            <div className="pb-2 mb-2 border-b border-gray-200 dark:border-zinc-600">
              <h1 className="font-danaMedium text-xl text-zinc-700 dark:text-white">
                اعلان‌ها
              </h1>
            </div>
            {notifications.length ? (
              notifications.map((notification) => (
                <li
                  className="flex items-start justify-between w-full pb-2.5 text-zinc-700 dark:text-white"
                  key={notification._id}
                >
                  {notification.msg}
                  <Link
                    className="py-1 px-3 bg-sky-500 rounded-xl"
                    onClick={() => seeNotification(notification._id)}
                  >
                    دیدم
                  </Link>
                </li>
              ))
            ) : (
              <h1 className="text-zinc-700 dark:text-white text-base">
                اعلان جدیدی وجود ندارد.
              </h1>
            )}
          </ul>
        </span>
        <span
          className="dark:hidden flex-center bg-white dark:bg-black-400 w-14 h-14 rounded-full cursor-pointer"
          onClick={darkModHandler}
        >
          <svg className=" w-6 h-6 text-slate-500 dark:text-gray-600">
            <use href="#moon"></use>
          </svg>
        </span>
        <span
          className="hidden dark:flex-center bg-white dark:bg-black-400 w-14 h-14 rounded-full cursor-pointer"
          onClick={lightModHandler}
        >
          <svg className=" w-6 h-6 text-slate-500 dark:text-gray-600">
            <use href="#sun"></use>
          </svg>
        </span>
        {/* <span className="flex items-end justify-center bg-zinc-300 w-14 h-14 rounded-full cursor-pointer">
          <svg className="w-12 h-12 text-white">
            <use href="#user"></use>
          </svg>
        </span> */}
        <UserProfile />
      </div>
      <SvgIcons />
    </div>
  );
}
