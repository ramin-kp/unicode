import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TicketBox from "../../components/UserPanel/TicketBox";

export default function UPanelTickets() {
  const [allTickets, setAllTickets] = useState([]);
  const answerTicket = allTickets.filter((ticket) => ticket.answer === 1);
  const noAnswerTicket = allTickets.filter((ticket) => ticket.answer === 0);
  useEffect(() => {
    getAllTickets();
  }, []);
  const getAllTickets = async () => {
    const fetchAllTickets = await fetch("http://localhost:4000/v1/tickets", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    });
    const data = await fetchAllTickets.json();
    setAllTickets(data);
  };
  return (
    <section>
      <div className="container">
        <div>
          <div className="flex items-center">
            <TicketBox
              title={"همه تیکت ها"}
              number={allTickets.length}
              color={"bg-yellow-500"}
            />
            <TicketBox
              title={"تیک های پاسخ داده شده"}
              number={answerTicket.length}
              color={"bg-sky-500"}
            />
            <TicketBox
              title={"تیک های پاسخ داده نشده"}
              number={noAnswerTicket.length}
              color={"bg-pink-500"}
            />
            <Link
              className="inline-block mr-auto mb-auto ml-2 p-5 rounded-xl text-white font-danaMedium bg-green-500 hover:bg-green-600"
              to="new-ticket"
            >
              تیکت جدید
            </Link>
          </div>
          <div className="p-5 bg-white dark:bg-black-400 rounded-xl">
            <h1 className="pb-3 font-danaMedium text-xl text-zinc-700 dark:text-white border-b border-gray-200 dark:border-zinc-700">
              تیکت‌ها
            </h1>
            {allTickets.length > 0 ? (
              allTickets.map((ticket, index) => (
                <div
                  key={ticket._id}
                  className="flex items-center justify-between p-3 my-2.5 hover:bg-gray-100 dark:hover:bg-black-300 rounded-lg transition-all"
                >
                  <Link
                    className="flex-center gap-5 font-danaMedium text-base text-zinc-700 dark:text-white"
                    to={`/my-account/view-ticket/${ticket._id}`}
                  >
                    <span>{index + 1}</span>
                    <p>{ticket.title}</p>
                  </Link>
                  <Link
                    className="flex-center gap-5 text-slate-500 dark:text-slate-400 text-xs"
                    to={`/my-account/view-ticket/${ticket._id}`}
                  >
                    <span>{ticket.createdAt.slice(0, 10)}</span>
                    <span className=" p-1.5 bg-gray-200 dark:bg-yellow-300/20 dark:!text-yellow-500 rounded-md">
                      {ticket.departmentID}
                    </span>
                    {ticket.answer === 1 ? (
                      <span className=" p-1.5 bg-green-300/20 text-green-500 rounded-md">
                        پاسخ داده شده
                      </span>
                    ) : (
                      <span className=" p-1.5 bg-red-300/20 !text-red-500 rounded-md">
                        پاسخ داده نشده
                      </span>
                    )}
                  </Link>
                </div>
              ))
            ) : (
              <div className="p-5 bg-red-500 text-white text-center font-danaMedium">
                تیکتی برای نشان دادن وجود ندارد
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
