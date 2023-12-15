import React from "react";
import { Link } from "react-router-dom";

export default function OrderInfos({ data }) {
  return (
    <section>
      {data && (
        <>
          <h1 className="text-zinc-700 dark:text-white text-base">
            سفارش{" "}
            <span className="w-auto px-2.5  mx-1 bg-sky-100 dark:bg-yellow-500/20 font-danaMedium text-lg text-sky-500 dark:text-yellow-500 rounded-lg">
              {data.course.name}
            </span>{" "}
            در تاریخ{" "}
            <span className="px-2.5 mx-1 bg-sky-100 dark:bg-yellow-500/20 font-danaMedium text-lg text-sky-500 dark:text-yellow-500 rounded-lg">
              {data.createdAt.slice(0, 10)}
            </span>
            ثبت شده و در وضعیت
            <span className="px-2.5 mx-1 bg-sky-100 dark:bg-yellow-500/20 font-danaMedium text-lg text-sky-500 dark:text-yellow-500 rounded-lg">
              {" "}
              تکمیل{" "}
            </span>
            است.
          </h1>
          <div className="flex items-start gap-x-20 justify-start h-full p-5">
            <div className="w-[350px] my-auto shadow rounded-xl overflow-hidden">
              <img
                src={`http://localhost:4000/courses/covers/${data.course.cover}`}
                className="w-full"
              />
            </div>
            <div className="font-danaBold text-xl text-sky-700 dark:text-white/80 my-2.5 child:my-2.5 child:p-2 child:bg-sky-100 dark:child:bg-yellow-500/10  child:rounded-lg">
              <h1>
                اسم دوره:
                <span className="font-danaMedium text-sky-500 dark:text-yellow-500 text-lg">
                  {data.course.name}
                </span>
              </h1>
              <h1>
                قیمت دوره:
                {data.course.price === 0 ? (
                  <span className="font-danaMedium text-red-500 dark:text-yellow-500 text-lg">
                    رایگان
                  </span>
                ) : (
                  <>
                    <span className="font-danaMedium text-sky-500 dark:text-yellow-500 text-lg">
                      {data.course.price.toLocaleString()}
                    </span>
                    <span className="font-danaMedium text-sky-500 dark:text-yellow-500 text-lg">
                      تومان
                    </span>
                  </>
                )}
              </h1>
              <h1>
                آخرین تاریخ آپدیت دوره:
                <span className="font-danaMedium text-sky-500 dark:text-yellow-500 text-lg">
                  {data.course.updatedAt.slice(0, 10)}
                </span>
              </h1>
              <h1>
                نحوه پشتیبانی:
                <span className="font-danaMedium text-sky-500 dark:text-yellow-500 text-lg">
                  {data.course.support}
                </span>
              </h1>
            </div>
            <Link
              className="px-2.5 py-2 my-auto mr-40 bg-pink-500 hover:bg-pink-600 font-danaMedium text-lg text-white rounded-lg"
              to={`/course-info/${data.course.shortName}`}
            >
              رفتن به صفحه دوره
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
