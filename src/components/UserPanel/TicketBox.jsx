import React from "react";

export default function TicketBox({ title, number, color }) {
  return (
    <div
      className={`mx-5 mb-10 p-5 rounded-xl text-white font-danaMedium text- ${color}`}
    >
      <h1>{title}</h1>
      <span className="flex-center pt-1.5 font-danaMedium text-base">
        {number}دوره
      </span>
    </div>
  );
}
