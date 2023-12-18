import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";
import UserContext from "./../../context/UserContext/UserContext";
import swal from "sweetalert";

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
            صفحه‌اصلی
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#video-camera"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="courses">
            دوره‌ها
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#film"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="session">
            جلسات
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#folder"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="menus">
            منوها
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#category"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="category">
            دسته بندی‌ها
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#book"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="blogs">
            مقاله‌ها
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#users"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="users">
            کاربران
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#comments"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="comments">
            کامنت‌ها
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#ticket"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="tickets">
            تیکت ها
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#chat"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="contact-us">
            پیغام‌ها
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#gift"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="offs">
            کدهای تخفیف
          </Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#cake"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="discounts">
             تخفیف همگانی
          </Link>
        </li>
        <li onClick={logoutHandler}>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#logout"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="#">
            خروج
          </Link>
        </li>
      </ul>
      <SvgIcons />
    </aside>
  );
}
