import React from "react";
import SvgIcons from "../assets/icons/SvgIcons";
import { Link } from "react-router-dom";

export default function ArticlesBox(props) {
  return (
    <div className="dark:border border-zinc-700 overflow-hidden rounded-xl shadow-md">
      <div>
        <img
          className="rounded-xl"
          src={`http://localhost:4000/courses/covers/${props.cover}`}
          alt="article-img"
        />
      </div>
      <div className="mx-2.5">
        <div className="mt-7 mb-9">
          <Link
            className="mb-1.5 h-14 text-zinc-700 font-danaMedium text-xl dark:text-white line-clamp-2"
            to={`/article-info/${props.shortName}`}
          >
            {props.title}
          </Link>
          <h4 className="mt-1.5 text-slate-500 dark:text-slate-400 font-danaLight text-sm line-clamp-3">
            {props.description}
          </h4>
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
              <span>{props.creator.name}</span>
            </Link>
            <div className="flex items-center mr-1.5">
              <svg className="w-5 h-5 ml-1.5">
                <use href="#calendar"></use>
              </svg>
              <span>{props.updatedAt.split("T").splice(0, 1)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center mt-4 py-[18px]  border-t border-slate-200 dark:border-secondary-600/10 transition-colors">
          <Link
            className="flex items-start justify-center font-danaMedium text-base dark:text-white text-zinc-700 hover:text-green-500 dark:child:hover:text-green-500"
            to={`/article-info/${props.shortName}`}
          >
            <span>مطالعه مقاله</span>
            <svg className="w-5 h-5 mr-1 dark:text-white">
              <use href="#arrow-solid"></use>
            </svg>
          </Link>
        </div>
      </div>
      <SvgIcons />
    </div>
  );
}
