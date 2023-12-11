import React, { useEffect, useState } from "react";
import DataTable from "./../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [courseStatus, setCourseStatus] = useState("presell");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseCover, setCourseCover] = useState({});
  const [newCourse, setNewCourse] = useState({
    name: "",
    description: "",
    shortName: "",
    price: "",
    support: "",
  });

  useEffect(() => {
    getCoursesInfo();
    getCategory();
  }, []);
  const getCategory = async () => {
    const fetchCategoriesInfo = await fetch(
      "http://localhost:4000/v1/category"
    );
    const json = await fetchCategoriesInfo.json();
    setCategories(json);
  };
  const getCoursesInfo = async () => {
    const fetchCoursesData = await fetch("http://localhost:4000/v1/courses");
    const json = await fetchCoursesData.json();
    setCourses(json);
  };
  const removeUserHandler = (courseId) => {
    swal({
      title: "آیا از حذف دوره مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (res) => {
      if (res) {
        const localStorageData = localStorage.getItem("user");
        const removeCourse = await fetch(
          `http://localhost:4000/v1/courses/${courseId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        if (removeCourse.status === 200) {
          swal({
            title: " دوره مورد نظر با موفقیت حذف شد",
            icon: "success",
            buttons: "تایید",
          }).then(() => getCoursesInfo());
        } else {
          swal({
            title: "مشکلی پیش آمده لطفا دوباره امتحان کنید",
            icon: "error",
            buttons: "تایید",
          });
        }
      }
    });
  };
  const courseCategoryHandler = (e) => {
    setCourseCategory(() => e.target.value);
  };
  const courseCoverHandler = (e) => {
    setCourseCover(e.target.files[0]);
  };
  const inputHandler = (e) => {
    setNewCourse(() => ({
      ...newCourse,
      [e.target.name]: e.target.value,
    }));
  };
  const addNewCourseHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("name", newCourse.name);
    formData.append("description", newCourse.description);
    formData.append("shortName", newCourse.shortName);
    formData.append("price", newCourse.price);
    formData.append("support", newCourse.support);
    formData.append("categoryID", courseCategory);
    formData.append("status", courseStatus);
    formData.append("cover", courseCover);
    const createCourse = await fetch("http://localhost:4000/v1/courses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: formData,
    });
    console.log(createCourse);
    if (createCourse.ok) {
      swal({
        title: "دوره مورد نظر با موفقیت ایجاد شد",
        icon: "success",
        button: "تایید",
      }).then(() => {
        getCoursesInfo();
        setCourseCover({});
        setNewCourse({
          name: "",
          description: "",
          shortName: "",
          price: "",
          support: "",
        });
      });
    } else {
      swal({
        title: "مشکلی پیش آمده لطفا دوباره امتحان کنید",
        icon: "error",
        button: "تایید",
      });
    }
  };
  return (
    <section>
      <div className="container">
        <form className="grid grid-cols-2 py-5 child:flex child:flex-col child:py-2 ">
          <div>
            <label className=" font-danaMedium text-lg text-zinc-700 dark:text-white">
              نام دوره
            </label>
            <input
              className="w-2/3 py-2 px-2.5  bg-transparent text-lg text-zinc-700 dark:text-white outline-none border-2 border-slate-500 dark:border-slate-400 rounded "
              type="text"
              value={newCourse.name}
              name="name"
              placeholder="نام دوره را وارد کنید..."
              onChange={inputHandler}
            />
          </div>
          <div>
            <label className=" font-danaMedium text-lg text-zinc-700 dark:text-white">
              توضیحات دوره
            </label>
            <textarea
              className="w-2/3 py-2 px-2.5  bg-transparent text-lg text-zinc-700 dark:text-white outline-none border-2 border-slate-500 dark:border-slate-400 rounded "
              type="text"
              value={newCourse.description}
              name="description"
              placeholder="توضیحات دوره را وارد کنید..."
              onChange={inputHandler}
            />
          </div>
          <div>
            <label className=" font-danaMedium text-lg text-zinc-700 dark:text-white">
              url دوره
            </label>
            <input
              className="w-2/3 py-2 px-2.5  bg-transparent text-lg text-zinc-700 dark:text-white outline-none border-2 border-slate-500 dark:border-slate-400 rounded "
              type="text"
              value={newCourse.shortName}
              name="shortName"
              placeholder="url دوره را وارد کنید..."
              onChange={inputHandler}
            />
          </div>
          <div>
            <label className=" font-danaMedium text-lg text-zinc-700 dark:text-white">
              قیمت دوره
            </label>
            <input
              className="w-2/3 py-2 px-2.5  bg-transparent text-lg text-zinc-700 dark:text-white outline-none border-2 border-slate-500 dark:border-slate-400 rounded "
              type="text"
              value={newCourse.price}
              name="price"
              placeholder="قیمت دوره را وارد کنید..."
              onChange={inputHandler}
            />
          </div>
          <div>
            <label className=" font-danaMedium text-lg text-zinc-700 dark:text-white">
              نحوه پشتیبانی دوره
            </label>
            <input
              className="w-2/3 py-2 px-2.5  bg-transparent text-lg text-zinc-700 dark:text-white outline-none border-2 border-slate-500 dark:border-slate-400 rounded "
              type="text"
              value={newCourse.support}
              name="support"
              placeholder="نحوه پشتیبانی دوره را وارد کنید..."
              onChange={inputHandler}
            />
          </div>
          <div>
            <label className=" font-danaMedium text-lg text-zinc-700 dark:text-white">
              دسته بندی دوره
            </label>
            <select
              className="w-2/3 px-2 py-2 text-zinc-700 font-danaMedium text-lg rounded outline-none"
              onChange={courseCategoryHandler}
            >
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className=" font-danaMedium text-lg text-zinc-700 dark:text-white">
              عکس دوره
            </label>
            <input
              className="w-2/3 py-2 px-2.5  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white outline-none rounded "
              type="file"
              onChange={courseCoverHandler}
            />
          </div>
          <div>
            <label className="font-danaMedium text-lg text-zinc-700 dark:text-white">
              وضعیت دوره
            </label>
            <div className="flex gap-5">
              <div className="">
                <label
                  className="ml-2 font-danaMedium text-base text-zinc-700 dark:text-white"
                  htmlFor="Presell"
                >
                  پیش فروش
                </label>
                <input
                  className="py-2 px-2.5  bg-transparent text-lg text-zinc-700 dark:text-white outline-none border-2 border-slate-500 dark:border-slate-400 rounded "
                  id="Presell"
                  type="radio"
                  name="radio"
                  value="presell"
                  onInput={(e) => setCourseStatus(e.target.value)}
                  defaultChecked
                />
              </div>
              <div>
                <label
                  className="ml-2 font-danaMedium text-base text-zinc-700 dark:text-white"
                  htmlFor="running"
                >
                  درحال برگزاری
                </label>
                <input
                  className="py-2 px-2.5  bg-transparent text-lg text-zinc-700 dark:text-white outline-none border-2 border-slate-500 dark:border-slate-400 rounded "
                  id="running"
                  type="radio"
                  name="radio"
                  value="start"
                  onInput={(e) => setCourseStatus(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-1/3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
              onClick={addNewCourseHandler}
            >
              افزودن دوره
            </button>
          </div>
        </form>
        <DataTable title={"دوره‌ها"}>
          <thead className="w-full">
            <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>لینک</th>
              <th>مدرس</th>
              <th>دسته‌بندی</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {courses.length
              ? courses.map((course, index) => (
                  <tr
                    className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                    key={course._id}
                  >
                    <td className="text-center dark:text-white">{index + 1}</td>
                    <td className="text-center dark:text-white">
                      {course.name}
                    </td>
                    <td className="text-center dark:text-white">
                      {course.price === 0
                        ? "رایگان"
                        : course.price.toLocaleString()}
                    </td>
                    <td className="text-center dark:text-white">
                      {course.isComplete === 1 ? "تکمیل شده" : "درحال برگزاری"}
                    </td>
                    <td className="text-center dark:text-white">
                      {course.shortName}
                    </td>
                    <td className="text-center dark:text-white">
                      {course.creator}
                    </td>
                    <td className="text-center dark:text-white">
                      {course.categoryID}
                    </td>
                    <td className="text-center dark:text-white">
                      <button className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base">
                        ویرایش
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                        onClick={() => removeUserHandler(course._id)}
                      >
                        حذف
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
