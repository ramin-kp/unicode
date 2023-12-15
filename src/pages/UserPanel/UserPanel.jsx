import React from "react";
import Sidebar from "./../../components/UserPanel/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "./../../components/UserPanel/Topbar";

export default function UserPanel() {
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
