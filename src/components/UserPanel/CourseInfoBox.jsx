import React from "react";

export default function CourseInfoBox({ title, color, number }) {
  return (
    <div
      className={`mx-5 mb-10 p-5 rounded-xl text-white font-danaMedium text-lg  ${color}`}
    >
      <h1>{title}</h1>
      <span className="flex-center pt-1.5 font-danaMedium text-xl">{number}دوره</span>
    </div>
  );
}
