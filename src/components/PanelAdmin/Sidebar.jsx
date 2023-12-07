import React from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";

export default function Sidebar() {
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
          <Link className="text-zinc-700 dark:text-white" to="/">صفحه‌اصلی</Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#folder"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="courses">دوره‌ها</Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#chat"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="menus">منوها</Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#user-outline"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="blogs">مقاله‌ها</Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#logout"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="users">کاربران</Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#logout"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="offs">کدهای تخفیف</Link>
        </li>
        <li>
          <svg className="w-6 h-5 ml-2.5 text-zinc-700 dark:text-white">
            <use href="#logout"></use>
          </svg>
          <Link className="text-zinc-700 dark:text-white" to="category">دسته بندی‌ها</Link>
        </li>
      </ul>
      <SvgIcons />
    </aside>
  );
}
