import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourses() {
  return (
    <main>
      <div className="container">
        <SectionHeader
          color="bg-purple-600"
          title="آخرین دوره‌ها"
          description="بهترین دوره‌های آموزشی برای پیشرفت"
          link={true}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
        </div>
      </div>
      <SvgIcons />
    </main>
  );
}
