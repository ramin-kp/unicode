import React, { useEffect, useState } from "react";
import UserCorseBox from "../../components/UserPanel/UserCorseBox";
import CourseInfoBox from "../../components/UserPanel/courseInfoBox";

export default function UPanelCourses() {
  const [allCorses, setAllCourses] = useState([]);
  const freeCorses = allCorses.filter(
    (userCourse) => userCourse.course.price === 0
  );
  const monetary = allCorses.filter(
    (userCourse) => userCourse.course.price !== 0
  );
  useEffect(() => {
    getUserCorses();
  }, []);
  const getUserCorses = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const fetchAllUserCorses = await fetch(
      "http://localhost:4000/v1/users/courses",
      {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      }
    );
    const json = await fetchAllUserCorses.json();
    setAllCourses(json);
    console.log(json);
  };
  return (
    <section>
      <div className="container">
        <div className="flex gap-x-5 ">
          <CourseInfoBox
            title={"دوره های ثبت نام شده"}
            color={"bg-yellow-500"}
            number={allCorses.length}
          />
          <CourseInfoBox
            title={"دوره های رایگان"}
            color={"bg-red-500"}
            number={freeCorses.length}
          />
          <CourseInfoBox
            title={"دوره های نقدی"}
            color={"bg-sky-500"}
            number={monetary.length}
          />
        </div>
        {allCorses.length > 0 ? (
          <div className="grid grid-cols-4 gap-x-5 gap-y-7">
            {allCorses.map((course) => (
              <UserCorseBox key={course._id} data={course} />
            ))}
          </div>
        ) : (
          <div className="bg-red-500 p-5 text-white text-center font-morabbaBold text-lg rounded-xl">
            دوره برای نمایش وجود ندارد
           </div>
        )}
      </div>
    </section>
  );
}
