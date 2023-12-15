import React from "react";
import { Link } from "react-router-dom";

export default function CourseBox(props) {
  return (
    <div className="bg-white dark:bg-black-400 rounded-xl overflow-hidden dark:border border-zinc-700 shadow-md">
      {/* img box */}
      <div>
        <img
          className="rounded-xl w-full"
          src={`http://localhost:4000/courses/covers/${props.cover}`}
          alt="courses-img"
        />
      </div>
      {/* main box */}
      <div className="px-2.5 py-2">
        <span className="w-[50px] h-6 px-2.5 py-px bg-sky-100 dark:bg-yellow-500/10 text-sky-500 dark:text-yellow-500 text-xs rounded-md text-center">
          {props.categoryID}
        </span>
        <div className="mt-3">
          <Link
            className=" font-danaMedium text-base text-zinc-700 dark:text-white line-clamp-2"
            to={`/course-info/${props.shortName}`}
          >
            {props.name}
          </Link>
          <h3 className="mt-2.5 mb-5 font-danaLight text-sm text-slate-500 dark:text-secondary-600 text-right line-clamp-2">
            {props.description}
          </h3>
        </div>
        <div className="flex items-center justify-between child:text-slate-500 dark:child:text-secondary-600">
          <div className="flex items-center">
            <Link
              className="flex items-center hover:text-green-500 transition-all"
              to="#"
            >
              <svg className="w-5 h-5 ml-1.5">
                <use href="#user-outline"></use>
              </svg>
              <span>{props.creator}</span>
            </Link>
            {/* <div className="flex items-center mr-1.5">
              <svg className="w-5 h-5 ml-1.5">
                <use href="#clock"></use>
              </svg>
              <span>{props.time}</span>
            </div> */}
            {/* no response data*/}
          </div>
          <div className="flex items-start child:text-amber-400">
            <span>4.2</span>
            <svg className="w-5 h-5 mr-1.5">
              <use href="#star"></use>
            </svg>
          </div>
        </div>
        {/* box footer */}
        <div className="flex items-center justify-between pt-2.5 mt-4 border-t border-slate-100 dark:border-secondary-600/10">
          <div className="flex items-center child:text-slate-500 dark:text-secondary-600">
            <svg className="w-5 h-5 ml-1.5">
              <use href="#users"></use>
            </svg>
            <span>{props.registers}</span>
          </div>
          <div>
            {props.price === 0 ? (
              <div className="flex items-center child:text-green-500">
                <p className="text-left text-xl">رایگان</p>
              </div>
            ) : (
              <div className="flex items-center child:text-green-500">
                <p className="text-left text-xl">
                  {props.price.toLocaleString()}
                </p>
                <span className="font-danaLight text-lg">تومان</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
