import React from "react";
import SvgIcons from "./../assets/icons/SvgIcons";
import SectionHeader from "./../SectionHeader/SectionHeader";
import ArticlesBox from "../ArticlesBox/ArticlesBox";

export default function LastArticles() {
  return (
    <section>
      <div className="container">
        <SectionHeader
          title="آخرین ‌مقاله ها"
          description="برترین مقالات برای افزایش دانش برنامه نویسی و سایر مهارت ها"
          link="/blogs"
          color="bg-yellow-500"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <ArticlesBox />
          <ArticlesBox />
          <ArticlesBox />
          <ArticlesBox />
        </div>
      </div>
      <SvgIcons />
    </section>
  );
}
