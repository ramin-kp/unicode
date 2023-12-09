import React, { useEffect, useState } from "react";
import DataTable from "../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminUsers() {
  const [usersData, setUsersData] = useState([]);
  const [newUserData, setNewUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const fetchUserData = await fetch("http://localhost:4000/v1/users", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });
    const json = await fetchUserData.json();
    setUsersData(json);
  };
  const removeUserHandler = (userId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "آیا از حذف کاربر مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/users/${userId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal({
              title: "کاربر حذف شد",
              icon: "success",
              buttons: "باشه",
            });
            getUserData();
          }
        });
      }
    });
  };
  const banUserHandler = (userId) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "آیا از مسدود کردن کاربر مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/users/ban/${userId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal({
              title: "کاربر مسدود شد",
              icon: "success",
              buttons: "باشه",
            });
            getUserData();
          }
        });
      }
    });
  };
  const changeHandler = (e) => {
    setNewUserData(() => ({
      ...newUserData,
      [e.target.name]: e.target.value,
      confirmPassword: newUserData.password,
    }));
  };
  const userRegisterHandler = async (e) => {
    e.preventDefault();
    try {
      const userRegister = await fetch(
        "http://localhost:4000/v1/auth/register",
        {
          method: "POST",
          body: JSON.stringify(newUserData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (userRegister.status === 201) {
        swal({
          title: "کاربر جدید یا موفقیت ایجاد شد",
          icon: "success",
          button: "باشه",
        }).then(() => {
          getUserData();
          setNewUserData(() => ({
            name: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }));
        });
      } else if (userRegister.status === 409) {
        swal({
          title: "کاربری با این مشخصات قبلا ایجاد شده است.",
          icon: "error",
          button: "باشه",
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      swal({
        title: "مشکلی پیش آمده لطفا بعدا دوباره امتحان کنید.",
        icon: "error",
        button: "باشه",
      });
    }
  };
  return (
    <section className="p-5 bg-white dark:bg-black-400 rounded-2xl shadow-md">
      <div className="container">
        <form className="grid grid-cols-2 gap-x-10 gap-y-5  mb-2.5 child:flex child:flex-col child:justify-end child:w-2/3 child:outline-none">
          <div>
            <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
              نام و نام خانوادگی
            </label>
            <input
              className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
              type="text"
              value={newUserData.name}
              name="name"
              onChange={changeHandler}
              placeholder="نام و نام خانوادگی  را وارد کنید..."
            />
          </div>
          <div>
            <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
              نام کاربری
            </label>
            <input
              className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
              type="text"
              value={newUserData.username}
              name="username"
              onChange={changeHandler}
              placeholder="نام کاربی را وارد کنید..."
            />
          </div>
          <div>
            <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
              ایمیل
            </label>
            <input
              className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
              type="email"
              value={newUserData.email}
              name="email"
              onChange={changeHandler}
              placeholder="ایمیل  را وارد کنید..."
            />
          </div>
          <div>
            <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
              رمز عبور
            </label>
            <input
              className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
              type="text"
              value={newUserData.password}
              name="password"
              onChange={changeHandler}
              placeholder="  رمزعبور  را وارد کنید..."
            />
          </div>
          <div>
            <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
              شماره موبایل
            </label>
            <input
              className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
              type="text"
              value={newUserData.phone}
              name="phone"
              onChange={changeHandler}
              placeholder="شماره موبایل را وارد کنید..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-1/4 px-2.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
              onClick={userRegisterHandler}
            >
              افزودن کاربر
            </button>
          </div>
        </form>
        <DataTable title={"کاربران"}>
          <thead>
            <tr className="child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>ویرایش</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {usersData.length
              ? usersData.map((user, index) => (
                  <tr
                    className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                    key={user._id}
                  >
                    <td className="text-center dark:text-white">{index + 1}</td>
                    <td className="text-center dark:text-white">{user.name}</td>
                    <td className="text-center dark:text-white">
                      {user.email}{" "}
                    </td>
                    <td className="text-center dark:text-white">
                      <button className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base">
                        ویرایش
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                        onClick={() => removeUserHandler(user._id)}
                      >
                        حذف
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        className="py-2 px-2.5 bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white text-base"
                        onClick={() => banUserHandler(user._id)}
                      >
                        بن کاربر
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </DataTable>
      </div>
    </section>
  );
}
