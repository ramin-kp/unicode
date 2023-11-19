import React from "react";

export default function CommentTextarea({ userInfo }) {
  return (
    <>
      <div className="flex items-center gap-2.5 p-5">
        <div>
          <img
            className="w-14 h-14 rounded-full object-cover"
            src="/images/avatar.jpg"
            alt="user-avatar"
          />
        </div>
        <div>
          <h1 className="font-danaMedium text-xl text-zinc-700 dark:text-white">
            {userInfo.name}
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400">
            ثبت نظر جدید
          </p>
        </div>
      </div>
      <textarea
        className="w-full h-36 p-5  bg-gray-100 dark:bg-black-300 text-zinc-700 dark:text-white font-danaMedium text-lg border border-gray-200 dark:border-black-200 rounded-2xl outline-none"
        placeholder="نظر خود را بنویسد..."
      ></textarea>
      <div className="flex items-center justify-end gap-2.5 my-2.5">
        <button className="px-5 py-2 bg-gray-100 hover:bg-gray-300 dark:bg-black-300 dark:hover:bg-black-200 rounded-xl text-zinc-700 dark:text-white transition-all">
          لغو
        </button>
        <button className="px-5 py-2 bg-sky-500 hover:bg-sky-600 gray-300 dark:bg-secondary-300 dark:hover:bg-secondary-400 rounded-xl text-white transition-all">
          ثبت
        </button>
      </div>
    </>
  );
}
