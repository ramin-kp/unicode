import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ courseData }) {
  return (
    <div className="relative hidden md:flex items-center gap-x-14 h-[50px] px-7 my-10 bg-white dark:bg-black-400 rounded-2xl text-zinc-700 dark:text-white font-danaLight text-lg">
      <div className="breadcrumb-arrow before:right-[70px] after:right-[70px] dark:before:bg-black-500 dark:after:bg-black-500">
        <Link to="/">
          <svg className="w-6 h-6">
            <use href="#home"></use>
          </svg>
        </Link>
      </div>
      {courseData.length
        ? courseData.map((item) => (
            <div
              className={`
              breadcrumb-arrow before:right-[280px] after:right-[280px] dark:before:bg-black-500 dark:after:bg-black-500`}
              key={item.id}
            >
              <Link
                className="font-danaMedium"
                to={`/course-info/${item.path}`}
              >
                {item.name && item.name}
              </Link>
            </div>
          ))
        : ""}
    </div>
  );
}
