import React, { useEffect, useState } from "react";
import DataTable from "./../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminOffs() {
  const [allOffs, setAllOffs] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [course, setCourse] = useState("-1");
  const [newOffs, setNewOffs] = useState({
    code: "",
    percent: "",
    max: "",
  });
  useEffect(() => {
    getAllOffs();
    getAllCourses();
  }, []);
  const getAllOffs = async () => {
    const getOffs = await fetch("http://localhost:4000/v1/offs");
    const json = await getOffs.json();
    setAllOffs(json);
  };
  const getAllCourses = async () => {
    const getOffs = await fetch("http://localhost:4000/v1/courses");
    const json = await getOffs.json();
    setAllCourses(json);
  };
  const removeOffCodeHandler = (offsCodeId) => {
    swal({
      title: "آیا از حذف کد تخفیف مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (res) => {
      if (res) {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        const removeOffCode = await fetch(
          `http://localhost:4000/v1/offs/${offsCodeId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        if (removeOffCode.status === 200) {
          swal({
            title: " کد تخفیف مورد نظر با موفقیت حذف شد",
            icon: "success",
            buttons: "تایید",
          }).then(() => getAllOffs());
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
  const changeHandler = (e) => {
    setNewOffs(() => ({ ...newOffs, [e.target.name]: e.target.value }));
  };
  const createOffCodeHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (course === "-1") {
      swal({
        title: "لطفا  دوره خود را انتخاب کنید",
        icon: "error",
        button: "تایید",
      });
    } else {
      const createOffsCode = await fetch("http://localhost:4000/v1/offs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify({
          code: newOffs.code,
          percent: newOffs.percent,
          course: course,
          max: newOffs.max,
        }),
      });
      if (createOffsCode.ok) {
        swal({
          title: "کد تخفیف مورد نظر با موفقیت ایجاد شد",
          icon: "success",
          button: "تایید",
        }).then(() => {
          getAllOffs();
          setNewOffs({
            code: "",
            percent: "",
            max: "",
          });
        });
      } else {
        swal({
          title: "مشکلی پیش آمده لطفا دوباره امتحان کنید",
          icon: "error",
          button: "تایید",
        });
      }
    }
  };
  return (
    <section>
      <form className="grid grid-cols-2 gap-x-10 gap-y-5  mb-2.5 child:flex child:flex-col child:justify-end child:w-2/3 child:outline-none">
        <div>
          <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
            کد تخفیف
          </label>
          <input
            className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
            type="text"
            value={newOffs.code}
            name="code"
            onChange={changeHandler}
            placeholder="عنوان را وارد کنید..."
          />
        </div>
        <div>
          <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
            میزان تخفیف
          </label>
          <input
            className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
            type="text"
            value={newOffs.percent}
            name="percent"
            onChange={changeHandler}
            placeholder=" میزان تخفیف را وارد کنید..."
          />
        </div>
        <div>
          <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
            حداکثر تعداد استفاده
          </label>
          <input
            className="h-full px-2.5 py-2 bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
            type="text"
            value={newOffs.max}
            name="max"
            onChange={changeHandler}
            placeholder="  حداکثر میزان استفاده را وارد کنید..."
          />
        </div>
        <div>
          <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
            دوره
          </label>
          <select
            className="h-full px-2.5 py-2 outline-none rounded"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="-1">دوره مورد نظر خود را انتخاب کنید</option>
            {allCourses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-1/3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
            onClick={createOffCodeHandler}
          >
            افزودن کد تخفیف
          </button>
        </div>
      </form>
      <DataTable title={"کدهای تخفیف"}>
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>کد تخفیف</th>
            <th>درصد تخفیف</th>
            <th>حداکثر استفاده</th>
            <th>دفعات استفاده</th>
            <th>سازنده</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {allOffs.length
            ? allOffs.map((offCode, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={offCode._id}
                >
                  <td className="text-center dark:text-white">{index + 1}</td>
                  <td className="text-center dark:text-white">
                    {offCode.code}
                  </td>
                  <td className="text-center dark:text-white">
                    {offCode.percent}
                  </td>
                  <td className="text-center dark:text-white">{offCode.max}</td>
                  <td className="text-center dark:text-white">
                    {offCode.uses}
                  </td>
                  <td className="text-center dark:text-white">
                    {offCode.creator}
                  </td>
                  <td className="text-center">
                    <button
                      className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                      onClick={() => removeOffCodeHandler(offCode._id)}
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
