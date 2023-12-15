import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";
import swal from "sweetalert";
import UserContext from "../../context/UserContext/UserContext";

export default function Sidebar() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    swal({
      title: "با موفقیت از پنل خود خارج شدید",
      icon: "success",
      button: "باشه",
    }).then(() => {
      userContext.logout();
      navigate("/");
    });
  };
  return (
    <aside className="w-64 mt-20 mr-32">
      <Link className="flex items-center gap-x-3" to="/">
        <img className="p- h-14" src="/images/logo.png" />
        <div className="child:text-zinc-700 dark:child:text-white">
          <h1 className="font-morabbaBold text-4xl/10">یونی کٌد</h1>
          <span className="inline-block w-full text-2xl/10 tracking-[.10em] text-left">
            unicode.ir
          </span>
        </div>
      </Link>
      <ul className="w-full mt-[50px] child:mb-6 child:flex child:items-start child:font-danaMedium ">
        <li className="sidebar__active">
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#home"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="">
            پیشخوان
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#shopping"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="orders">
            سفارشات
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#folder"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="courses">
            دوره‌های من
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#chat"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="tickets">
            تیکت‌ها
          </Link>
        </li>
        <li onClick={logoutHandler}>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#logout"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="category">
            خروج
          </Link>
        </li>
      </ul>
      <SvgIcons />
    </aside>
  );
}
