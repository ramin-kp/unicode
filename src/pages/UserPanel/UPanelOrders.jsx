import React, { useEffect, useState } from "react";
import DataTable from "../../components/PanelAdmin/DataTable/DataTable";
import { Link } from "react-router-dom";

export default function UPanelOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getAllOrders();
  }, []);
  const getAllOrders = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const getOrders = await fetch("http://localhost:4000/v1/orders", {
      headers: { Authorization: `Bearer ${localStorageData.token}` },
    });
    const json = await getOrders.json();
    setOrders(json);
  };
  return (
    <section>
      {orders.length > 0 ? (
        <DataTable title="دوره‌های خریداری شده">
          <thead className="w-full">
            <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
              <th>شناسه</th>
              <th>تاریخ</th>
              <th>وضعیت</th>
              <th>دوره</th>
              <th>مبلغ</th>
              <th>عملیات ها</th>
            </tr>
          </thead>
          <tbody>
            {orders.length
              ? orders.map((order, index) => (
                  <tr
                    className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                    key={order._id}
                  >
                    <td className="text-center dark:text-white">{index + 1}</td>
                    <td className="text-center dark:text-white">
                      {order.createdAt && order.createdAt.slice(0, 10)}
                    </td>
                    <td className="text-center dark:text-white">تکمیل شده</td>
                    <td className="text-center dark:text-white">
                      {order.course && order.course.name}
                    </td>
                    <td className="text-center dark:text-white">
                      {order.course &&
                        (order.course.price === 0
                          ? "رایگان"
                          : order.course.price.toLocaleString())}
                    </td>
                    <td className="text-center dark:text-white">
                      <Link
                        to={`${order._id}`}
                        className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                      >
                        عملیات
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </DataTable>
      ) : (
        <div className="bg-red-500 p-5 mt-20 text-white text-center font-morabbaBold text-lg rounded-xl">
          دوره‌ای خریداری نشده است{" "}
        </div>
      )}
    </section>
  );
}
