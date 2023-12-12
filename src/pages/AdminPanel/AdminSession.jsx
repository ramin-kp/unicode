import React, { useEffect, useState } from "react";
import DataTable from "../../components/PanelAdmin/DataTable/DataTable";
import { json } from "react-router-dom";
import swal from "sweetalert";

export default function AdminSession() {
  const [allSessions, setAllSessions] = useState([]);
  useEffect(() => {
    getAllSessions();
  }, []);
  const getAllSessions = async () => {
    const getSession = await fetch("http://localhost:4000/v1/courses/sessions");
    const json = await getSession.json();
    setAllSessions(json);
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
  return (
    <section>
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
