import React, { useEffect, useState } from "react";
import DataTable from "../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    title: "",
    name: "",
  });
  useEffect(() => {
    getCategoriesInfo();
  }, []);
  const getCategoriesInfo = async () => {
    const fetchCategoriesInfo = await fetch(
      "http://localhost:4000/v1/category"
    );
    const json = await fetchCategoriesInfo.json();
    console.log(json);
    setCategories(json);
  };
  const changeHandler = (e) => {
    setNewCategory(() => ({
      ...newCategory,
      [e.target.name]: e.target.value,
    }));
  };
  const createCategoryHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    try {
      const createCategory = await fetch("http://localhost:4000/v1/category", {
        method: "POST",
        body: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      if (createCategory.status === 201) {
        swal({
          title: "دسته‌بندی جدید با موفقیت ایجاد شد",
          icon: "success",
          button: "باشه",
        }).then(() => {
          getCategoriesInfo();
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      swal({
        title: "مشکلی پیش آمده لطفا دوباره امتحان کنید",
        icon: "errora",
        button: "باشه",
      });
    }
  };
  return (
    <section>
      <form className="grid grid-cols-2 gap-x-10 gap-y-5  mb-2.5 child:flex child:flex-col child:justify-end child:w-2/3 child:outline-none">
        <div>
          <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
            عنوان
          </label>
          <input
            className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
            type="text"
            value={newCategory.title}
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
            value={newCategory.name}
            name="name"
            onChange={changeHandler}
            placeholder="اسم کوتاه را وارد کنید..."
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-1/3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
            onClick={createCategoryHandler}
          >
            افزودن دسته‌بندی
          </button>
        </div>
      </form>
      <DataTable title={"دسته‌بندی‌ها"}>
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>عنوان</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {categories.length
            ? categories.map((category, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={category._id}
                >
                  <td className="text-center dark:text-white">{index + 1}</td>
                  <td className="text-center dark:text-white">
                    {category.title}
                  </td>

                  <td className="text-center dark:text-white">
                    <button className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base">
                      ویرایش
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                      // onClick={() => removeUserHandler(user._id)}
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
