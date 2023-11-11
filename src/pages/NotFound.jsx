import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const theme = localStorage.getItem("theme") === "dark";
  console.log(theme);
  return (
    <main
      className={`flex items-center justify-center h-screen w-screen  ${
        theme ? "bg-black-500" : "bg-white"
      } `}
    >
      <div className="flex flex-col items-center justify-center gap-y-10">
        <img
          src={`${theme ? "/images/404-dark.svg" : "/images/404-light.svg"}`}
          alt="notfound-img"
        />
        <h1
          className={`font-morabbaBold text-xl sm:text-3xl ${
            theme ? "text-white" : "text-zinc-700"
          }   text-center`}
        >
          صفحه ای که دنبالش بودی پیدا نشد :(
        </h1>
        <Link
          className={`inline-block px-5 py-2.5 ${
            theme
              ? "bg-secondary-300 hover:bg-secondary-400"
              : "bg-green-500 hover:bg-green-600"
          } text-white rounded-xl transition-all`}
          to="/"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}
