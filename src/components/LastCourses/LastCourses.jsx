import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import SvgIcons from "../assets/icons/SvgIcons";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourses() {
  const [allCourses, setAllCourses] = useState({});
  useEffect(() => {
    fetchAllCourses();
  }, []);
  const fetchAllCourses = async () => {
    const fetchData = await fetch("http://localhost:4000/v1/courses");
    const json = await fetchData.json();
    setAllCourses(json);
  };

  return (
    <section>
      <div className="container">
        <SectionHeader
          color="bg-purple-600"
          title="آخرین دوره‌ها"
          description="بهترین دوره‌های آموزشی برای پیشرفت"
          link="/courses"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {allCourses.length
            ? allCourses.map((course) => (
                <CourseBox key={course._id} {...course} />
              ))
            : "loading ..."}
        </div>
      </div>
      <SvgIcons />
    </section>
  );
}
