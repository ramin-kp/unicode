import React, { useState } from "react";
import { Link } from "react-router-dom";
import SvgIcons from "../components/assets/icons/SvgIcons";
import swal from "sweetalert";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    body: "",
  });
  const inputHandler = (e) => {
    setContactData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const contactRegisterHandler = async () => {
    try {
      const postData = await fetch("http://localhost:4000/v1/contact", {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (postData.status === 201) {
        swal({
          title: "تیکت شما با موفقیت ارسال شد.",
          text: "بعد برسی مدیران جواب تیکت شما به ایملتان ارسال می‌شود.",
          button: "باشه",
          icon: "success",
        });
      } else {
        throw new error();
      }
    } catch (error) {
      swal({
        title: "لطفا بعدا دوباره امتحان کنید",
        button: "باشه",
        icon: "error",
      });
    }
  };
  return (
    <main className="h-screen bg-gray-100 dark:bg-black-500 text-zinc-700">
      <section className="flex justify-center items-center h-full">
        <div className="w-[400px]">
          <div className="flex justify-center gap-4 mb-4">
            <img className="w-24 h-58" src="/images/logo.png" alt="logo" />
            <div>
              <h1 className="text-xl dark:text-white font-morabbaBold">
                یونی کٌد
              </h1>
              <p className="dark:text-white tracking-widest">unicode.ir</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-h-115 bg-white dark:bg-black-400 rounded-3xl px-9 py-8 shadow-md">
            <h2 className="mb-5 text-2xl dark:text-white font-danaBold">
              ارتباط با ما
            </h2>

            <div className="flex justify-between items-center gap-x-3 w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3">
              <input
                className="grow px-1 bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="text"
                value={contactData.name}
                name="name"
                placeholder="نام "
                onChange={inputHandler}
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#user-outline"></use>
              </svg>
            </div>
            <div className="flex justify-between items-center gap-x-3 w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <input
                className="grow px-1 bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="email"
                value={contactData.email}
                name="email"
                placeholder="ایمیل"
                onChange={inputHandler}
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#email"></use>
              </svg>
            </div>
            <div className="flex justify-between items-center gap-x-3 w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <input
                className="grow px-1 bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                type="text"
                value={contactData.phone}
                name="phone"
                placeholder="شماره موبایل"
                onChange={inputHandler}
              />
              <svg className="w-5 h-5 text-slate-500 dark:text-slate-400">
                <use href="#phone"></use>
              </svg>
            </div>

            <div className="flex justify-between items-center gap-x-3 w-full bg-gray-100 dark:bg-black-300 rounded-xl px-4 py-3 mt-3">
              <textarea
                className="grow px-1 bg-transparent text-lg dark:text-secondary-600 border-none outline-none"
                value={contactData.body}
                name="body"
                placeholder="متن خود را وارد کنید ..."
                onChange={inputHandler}
              ></textarea>
            </div>
            <button
              className="w-full bg-green-500 text-white text-xl text-center rounded-xl px-28 py-3 mt-5 duration-300 hover:bg-green-400 shadow-md"
              onClick={contactRegisterHandler}
            >
              ارسال
            </button>
          </div>
          <p className="font-danaMedium text-base text-center dark:text-secondary-600 mt-6">
            هر انتقاد یا پیشنهادی داری برامون بفرست دوست عزیز❤️
          </p>
        </div>
      </section>
      <SvgIcons />
    </main>
  );
}
