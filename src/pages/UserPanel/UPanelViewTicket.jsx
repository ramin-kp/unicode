import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UPanelViewTicket() {
  const [answerTickets, setAnswerTickets] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getAnswerTickets();
  }, []);
  const getAnswerTickets = async () => {
    const fetchAnswerTickets = await fetch(
      `http://localhost:4000/v1/tickets/answer/${id}`,
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      }
    );
    const data = await fetchAnswerTickets.json();
    setAnswerTickets(data);
  };
  return (
    <section>
      <div className="container">
        <div className=" p-5 bg-white dark:bg-black-400 rounded-xl">
          <div className="py-2.5 font-danaMedium text-xl text-zinc-700 dark:text-white border-b border-gray-200 dark:border-zinc-700">
            صفحه نمایش تیکت
          </div>
          <div className="w-2/3 p-5 pl-20 my-5 bg-gray-100 text-base dark:text-white dark:bg-black-300 rounded-xl">
            {answerTickets.ticket}
          </div>
          {answerTickets.answer && (
            <div className="w-2/3 p-5 pl-20 mr-auto my-5 bg-sky-200 text-base dark:text-white dark:bg-secondary-100/50 rounded-xl">
              {answerTickets.answer}{" "}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
