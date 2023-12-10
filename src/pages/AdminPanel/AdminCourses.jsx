import React, { useEffect, useState } from "react";
import DataTable from "./../../components/PanelAdmin/DataTable/DataTable";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCoursesInfo();
  }, []);
  const getCoursesInfo = async () => {
    const fetchCoursesData = await fetch("http://localhost:4000/v1/courses");
    const json = await fetchCoursesData.json();
    setCourses(json);
  };
  return (
    <section>
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
                  <td className="text-center dark:text-white">{course.name}</td>
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
