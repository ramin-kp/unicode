import React, { useEffect, useState } from "react";
import DataTable from "../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminSession() {
  const [allSessions, setAllSessions] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [sessionVideo, setSessionVideo] = useState({});
  const [courseCategory, setCourseCategory] = useState("-1");
  const [sessionStatus, setSessionStatus] = useState("1");
  const [newSession, setNewSession] = useState({
    title: "",
    time: "",
  });
  useEffect(() => {
    getAllSessions();
    getAllCourses();
  }, []);
  const getAllSessions = async () => {
    const getSession = await fetch("http://localhost:4000/v1/courses/sessions");
    const json = await getSession.json();
    setAllSessions(json);
  };
  const getAllCourses = async () => {
    const getCourses = await fetch("http://localhost:4000/v1/courses");
    const json = await getCourses.json();
    setAllCourses(json);
  };
  const removeSessionHandler = (sessionID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "آیا از حذف جلسه مورد نظر مطمون هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (result) => {
      const removeSession = await fetch(
        `http://localhost:4000/v1/courses/sessions/${sessionID}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${localStorageData.token}` },
        }
      );
      if (removeSession.ok) {
        swal({
          title: "جلسه مورد نظر با موفقیت حذف شد",
          icon: "success",
          button: "تایید",
        }).then(() => getAllSessions());
      }
    });
  };
  const inputHandler = (e) => {
    setNewSession(() => ({ ...newSession, [e.target.name]: e.target.value }));
  };
  const addNewSessionHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const formData = new FormData();
    formData.append("title", newSession.title);
    formData.append("time", newSession.time);
    formData.append("video", sessionVideo);
    formData.append("free", sessionStatus);
    if (courseCategory === "-1") {
      swal({
        title: "لطفا دوره مورد نظر خود را انتخاب کنید ",
        icon: "error",
        button: "تایید",
      });
    } else {
      const addSession = await fetch(
        `http://localhost:4000/v1/courses/${courseCategory}/sessions`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }
      );
      if (addSession.ok) {
        swal({
          title: "جلسه مورد نظر با موفقیت ایجاد شد",
          icon: "success",
          button: "تایید",
        }).then(() => {
          getAllSessions();
          setNewSession(()=>({ title: "", time: "" }));
        });
      }
    }
  };
  return (
    <section>
      <form className="grid grid-cols-2 gap-2 mb-5 child:flex child:flex-col child:my-2 ">
        <div className="font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>عنوان </label>
          <input
            className="w-2/3 py-2 px-5 bg-transparent border-2 border-slate-500 dark:border-slate-400 rounded outline-none"
            type="text"
            name="title"
            placeholder="عنوان جلسه را وارد کنید..."
            value={newSession.title}
            onChange={inputHandler}
          />
        </div>
        <div className="font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>تایم جلسه</label>
          <input
            className="w-2/3 py-2 px-5 bg-transparent border-2 border-slate-500 dark:border-slate-400 rounded outline-none"
            type="text"
            name="time"
            placeholder=" تایم جلسه را وارد کنید..."
            value={newSession.time}
            onChange={inputHandler}
          />
        </div>
        <div className="w-2/3 font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>ویدیو</label>
          <input
            type="file"
            onChange={(e) => setSessionVideo(e.target.files[0])}
          />
        </div>
        <div className="w-2/3 font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>دسترسی جلسه</label>
          <div className="flex gap-x-5">
            <div>
              <label htmlFor="free">رایگان</label>
              <input
                type="radio"
                name="radio"
                value="1"
                onInput={(e) => setSessionStatus(e.target.value)}
                defaultChecked
              />
            </div>
            <div>
              <label htmlFor="cash">نقدی</label>
              <input
                type="radio"
                name="radio"
                value="0"
                onInput={(e) => setSessionStatus(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-2/3 font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>دوره‌ها</label>
          <select
            className="py-2 px-5"
            onChange={(e) => setCourseCategory(e.target.value)}
          >
            <option value="-1">لطفا دوره خود را انتخاب کنید</option>
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
            onClick={addNewSessionHandler}
          >
            افزودن جلسه
          </button>
        </div>
      </form>
      <DataTable title={"جلسات دوره‌ها"}>
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>عنوان</th>
            <th>تایم</th>
            <th>دوره</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {allSessions.length
            ? allSessions.map((session, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={session._id}
                >
                  <td className="text-center dark:text-white">{index + 1}</td>
                  <td className="text-center dark:text-white">
                    {session.title}
                  </td>

                  <td className="text-center dark:text-white">
                    {session.time}
                  </td>
                  <td className="text-center dark:text-white">
                    {session.course.name}
                  </td>

                  <td className="text-center">
                    <button
                      className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                      onClick={() => removeSessionHandler(session._id)}
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
