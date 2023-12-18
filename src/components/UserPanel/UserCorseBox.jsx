import React from "react";
import { Link } from "react-router-dom";

export default function UserCorseBox({ data }) {
  return (
    <Link
      className="bg-white dark:bg-black-400 rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-lg group"
      to={`/course-info/${data.course.shortName}`}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={`http://localhost:4000/courses/covers/${data.course.cover}`}
        />
      </div>
      <h1 className="h-10 p-2.5 font-danaMedium text-lg text-zinc-700 dark:text-white group-hover:text-green-500 transition-colors duration-0 line-clamp-1">
        {data.course.name}
      </h1>
      <div className="flex flex-col gap-y-2 mx-2 p-5 border-t border-gray-300 dark:border-zinc-700 ">
        <h1 className="!text-green-500 font-danaMedium text-lg child:text-zinc-700 dark:text-white child:font-dana child:text-base dark:child:text-white">
          نحوه پشتیبانی:<span>{data.course.support}</span>
        </h1>
        <h1 className="!text-green-500 font-danaMedium text-lg child:text-zinc-700 dark:text-white child:font-dana child:text-base dark:child:text-white">
          وضعیت دوره:
          <span>
            {data.course.isComplete === 1 ? "تکمیل شده" : "درحال برگزاری"}
          </span>
        </h1>
      </div>
    </Link>
  );
}
