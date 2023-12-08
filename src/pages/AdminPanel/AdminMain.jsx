import React, { useEffect, useState } from "react";
import DataTable from "../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminMain() {
  const [usersData, setUsersData] = useState([]);
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
  return (
    <section className="p-5 bg-white dark:bg-black-400 rounded-2xl shadow-md">
      <div className="container">
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
                      <button className="py-2 px-2.5 bg-yellow-500 rounded-lg hover:bg-yellow-600 text-white text-base">
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
