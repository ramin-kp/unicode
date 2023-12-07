import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/PanelAdmin/Sidebar";
import Topbar from "./../../components/PanelAdmin/Topbar";

export default function AdminPanel() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <main className="h-full bg-white dark:bg-black-400">
      <div className="flex gap-x-10">
        <Sidebar />
        <div className="grow w-max-[1432px] p-10 ml-25 mt-7 mb-[50px] bg-gray-100 dark:bg-black-500 rounded-[32px]">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </main>
  );
}
