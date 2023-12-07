import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/PanelAdmin/Sidebar";

export default function AdminPanel() {
  return (
    <main className="h-full bg-white dark:bg-black-400">
      <div className="flex gap-x-10">
        <Sidebar />
        <div className="grow w-max-[1432px] p-10 ml-[120px] my-[50px] bg-gray-100 dark:bg-black-500 rounded-[32px]">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
