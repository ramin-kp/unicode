import React, { useContext, useEffect, useId, useState } from "react";
import UserContext from "./../../context/UserContext/UserContext";
import swal from "sweetalert";

export default function UPanelUserInfo() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const userInfo = useContext(UserContext);
  useEffect(() => {
    setName(userInfo.userInfos.name);
    setUsername(userInfo.userInfos.username);
    setEmail(userInfo.userInfos.email);
    setPhone(userInfo.userInfos.phone);
  }, []);
  const updateAccountHandler = async (e) => {
    e.preventDefault();
    if (!name || !username || !email || !password || !phone) {
      swal({
        title: "کادر های مورد نظر را پر کنید",
        icon: "warning",
        button: "تایید",
      });
    } else {
      const fetchUpdateAccount = await fetch(
        "http://localhost:4000/v1/users/",
        {
          method: "PUT",
          body: JSON.stringify({
            name,
            username,
            email,
            password,
            phone,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }
      );
      if (fetchUpdateAccount.ok) {
        swal({
          title: "اطلاعات حساب کاربری شما با موفقیت آپدیت شد",
          icon: "success",
          button: "تایید",
        });
      }
    }
  };
  return (
    <section>
      <div className="container">
        <div className="p-5 bg-white dark:bg-black-400 rounded-xl">
          <h1 className="pb-3 font-danaMedium text-xl text-zinc-700 dark:text-white border-b border-gray-200 dark:border-zinc-700">
            ارسال تیکت
          </h1>
          <form className="grid grid-cols-2 gap-5 my-5 ">
            <div className="flex flex-col">
              <label>نام و نام خانوادگی</label>
              <input
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                type="text"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>نام کاربری</label>
              <input
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                type="text"
                placeholder="نام کاربری خود را وارد کنید"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>ایمیل</label>
              <input
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                type="text"
                placeholder=" ایمیل خود را وارد کنید"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>شماره موبایل</label>
              <input
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                type="text"
                placeholder=" شماره موبایل  خود را وارد کنید"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>رمز عبور</label>
              <input
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                type="text"
                placeholder="پسورد خود را وارد کنید"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-2.5 py-2 bg-blue-500 hover:bg-blue-600 text-lg text-white rounded-lg"
                onClick={updateAccountHandler}
              >
                ثبت اطلاعات
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
