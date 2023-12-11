import React from "react";

export default function DataTable({ title, children }) {
  return (
    <div className="p-5 bg-white dark:bg-black-400 rounded-xl shadow-md">
      <h1 className="font-morabbaBold text-xl dark:text-white">
        لیست <span className="text-blue-700 dark:text-blue-500">{title}</span>
      </h1>
      <table className="w-full my-5 table-auto">{children}</table>
    </div>
  );
}
