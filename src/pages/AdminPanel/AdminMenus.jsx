import React, { useEffect, useState } from "react";
import DataTable from "./../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminMenus() {
  const [menus, setMenus] = useState([]);
  const [parentMenu, setParentMenu] = useState("-1");
  const [newMenu, setNewMenus] = useState({
    title: "",
    href: "",
  });
  useEffect(() => {
    getAllMenus();
  }, []);
  const getAllMenus = async () => {
    const getMenus = await fetch("http://localhost:4000/v1/menus/all");
    const json = await getMenus.json();
    setMenus(json);
  };
  const removeMenuHandler = (menuID) => {
    swal({
      title: "آیا از حذف منو مورد نظر مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (result) => {
      if (result) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        const removeMenu = await fetch(
          `http://localhost:4000/v1/menus/${menuID}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${localStorageData.token}` },
          }
        );
        if (removeMenu.ok) {
          swal({
            title: "منو مورد نظر با موفقیت حذف شد",
            icon: "success",
            button: "تایید",
          }).then(() => getAllMenus());
        }
      }
    });
  };
  const changeHandler = (e) => {
    setNewMenus(() => ({
      ...newMenu,
      [e.target.name]: e.target.value,
    }));
  };
  const createMenuHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const addNewMenus = await fetch("http://localhost:4000/v1/menus", {
      method: "POST",
      body: JSON.stringify({
        title: newMenu.title,
        href: newMenu.href,
        parent: parentMenu === "-1" ? undefined : parentMenu,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });
    if (addNewMenus.ok) {
      swal({
        title: "منو با موفقست ایجاد شد",
        icon: "success",
        button: "تایید",
      }).then(() => {
        getAllMenus();
        setNewMenus({ title: "", href: "" });
      });
    }
  };
  return (
    <section>
      <form className="grid grid-cols-2 gap-x-10 gap-y-5  mb-5 child:flex child:flex-col child:justify-end child:w-2/3 child:outline-none">
        <div>
          <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
            عنوان
          </label>
          <input
            className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
            type="text"
            value={newMenu.title}
            name="title"
            onChange={changeHandler}
            placeholder="عنوان را وارد کنید..."
          />
        </div>
        <div>
          <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
            اسم کوتاه
          </label>
          <input
            className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
            type="text"
            value={newMenu.href}
            name="href"
            onChange={changeHandler}
            placeholder="url  را وارد کنید..."
          />
        </div>
        <div>
          <label>منو پرنت</label>
          <select
            className="py-2 px-5 outline-none rounded"
            onChange={(e) => setParentMenu(e.target.value)}
          >
            <option value="-1">منو پرنت را انتخاب کنید</option>
            {menus.map((menu) => (
              <React.Fragment key={menu._id}>
                {!menu.parent && <option value={menu._id}>{menu.title}</option>}
              </React.Fragment>
            ))}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-1/3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
            onClick={createMenuHandler}
          >
            افزودن دسته‌بندی
          </button>
        </div>
      </form>
      <DataTable title="منوها">
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>عنوان</th>
            <th>مقصد</th>
            <th>فرزند...</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {menus.length
            ? menus.map((menu, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={menu._id}
                >
                  <td className="text-center dark:text-white">{index + 1}</td>
                  <td className="text-center dark:text-white">{menu.title}</td>
                  <td className="text-center dark:text-white">{menu.href}</td>
                  <td className="text-center dark:text-white">
                    {menu.parent ? (
                      menu.parent.title
                    ) : (
                      <svg className="w-5 h-5 mx-auto text-zinc-700 dark:text-white">
                        <use href="#check"></use>
                      </svg>
                    )}
                  </td>
                  <td className="text-center dark:text-white">
                    <button
                      className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                      // onClick={() => updatemenuHandler(menu._id)}
                    >
                      ویرایش
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                      onClick={() => removeMenuHandler(menu._id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </DataTable>
    </section>
  );
}
