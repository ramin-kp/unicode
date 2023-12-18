import React, { useEffect, useState } from "react";
import DataTable from "./../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminTickets() {
  const [allTickets, setAllTickets] = useState([]);
  useEffect(() => {
    getAllTicket();
  }, []);
  const getAllTicket = async () => {
    const fetchAllTicket = await fetch("http://localhost:4000/v1/tickets", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    });
    const jsonData = await fetchAllTicket.json();
    setAllTickets(jsonData);
  };
  const showTicketHandler = (ticketBody) => {
    swal({
      title: ticketBody,
      button: "تایید",
    });
  };
  const answerTicketHandler = (ticketID) => {
    swal({
      title: "پاسخ تیکت را وارد کنید",
      content: "input",
      button: "ارسال",
    }).then(async (result) => {
      if (result) {
        const sentAnswerTicket = await fetch(
          "http://localhost:4000/v1/tickets/answer",
          {
            method: "POST",
            body: JSON.stringify({
              ticketID,
              body: result,
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user")).token
              }`,
            },
          }
        );
        if (sentAnswerTicket.ok) {
          swal({
            title: "پاسخ تیکت مورد نظر با موفقیت ارسال شد",
            icon: "success",
            button: "تایید",
          }).then(() => getAllTicket());
        }
      }
    });
  };
  console.log(allTickets);
  return (
    <section>
      <DataTable title="کامنت‌ها">
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>کاربر</th>
            <th>عنوان</th>
            <th>نوع تیکت</th>
            <th>دوره</th>
            <th>الویت</th>
            <th>مشاهده</th>
            <th>پاسخ</th>
          </tr>
        </thead>
        <tbody>
          {allTickets.length
            ? allTickets.map((ticket, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={ticket._id}
                >
                  <td
                    className={`${
                      ticket.answer === 1
                        ? "bg-primary text-white"
                        : "bg-red-500 text-white"
                    } text-center`}
                  >
                    {index + 1}
                  </td>
                  <td className="text-center dark:text-white">{ticket.user}</td>
                  <td className="text-center dark:text-white">
                    {ticket.title}
                  </td>
                  <td className="text-center dark:text-white">
                    {ticket.departmentID}
                  </td>
                  <td className="text-center dark:text-white">
                    {ticket.course === null ? "---" : ticket.course.name}
                  </td>
                  <td className="text-center dark:text-white">
                    {ticket.priority === 1 && "زیاد"}
                    {ticket.priority === 2 && "متوسط"}
                    {ticket.priority === 3 && "کم"}
                  </td>
                  <td className="text-center dark:text-white">
                    <button
                      className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                      onClick={() => showTicketHandler(ticket.body)}
                    >
                      مشاهده
                    </button>
                  </td>
                  <td className="text-center dark:text-white">
                    {ticket.answer === 1 ? (
                      "پاسخ ارسال شده"
                    ) : (
                      <button
                        className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                        onClick={() => answerTicketHandler(ticket._id)}
                      >
                        پاسخ
                      </button>
                    )}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </DataTable>
    </section>
  );
}
