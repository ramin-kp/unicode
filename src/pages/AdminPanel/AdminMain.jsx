import React, { useEffect, useState } from "react";
import DataTable from "./../../components/PanelAdmin/DataTable/DataTable";
import PAdminItem from "../../components/PanelAdmin/PAdminItem";

export default function AdminMain() {
  const [infos, setInfos] = useState([]);
  const [lastUsers, setLastUsers] = useState([]);
  useEffect(() => {
    getIndexData();
  }, []);
  const getIndexData = async () => {
    const fetchIndexData = await fetch(
      "http://localhost:4000/v1/infos/p-admin",
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      }
    );
    const json = await fetchIndexData.json();
    setInfos(json.infos);
    setLastUsers(json.lastUsers);
  };
  return (
    <section>
      <div className="grid grid-cols-3 gap-5 py-10">
        {infos.map((item, index) => (
          <PAdminItem key={index} {...item} />
        ))}
      </div>
      <DataTable title={"کاربران اخیر"}>
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>نام و نام خانوادگی</th>
            <th>ایمیل</th>
          </tr>
        </thead>
        <tbody>
          {lastUsers.length
            ? lastUsers.map((blog, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={blog._id}
                >
                  <td className="text-center dark:text-white">{index + 1}</td>
                  <td className="text-center dark:text-white">{blog.name}</td>
                  <td className="text-center dark:text-white">{blog.email}</td>
                </tr>
              ))
            : null}
        </tbody>
      </DataTable>
    </section>
  );
}
