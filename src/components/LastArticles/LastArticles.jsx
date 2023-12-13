import React, { useEffect, useState } from "react";
import SvgIcons from "./../assets/icons/SvgIcons";
import SectionHeader from "./../SectionHeader/SectionHeader";
import ArticlesBox from "../ArticlesBox/ArticlesBox";

export default function LastArticles() {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/v1/articles");
    const json = await data.json();
    setBlogsData(json);
  };
  return (
    <section>
      <div className="container">
        <SectionHeader
          title="آخرین ‌مقاله ها"
          description="برترین مقالات برای افزایش دانش برنامه نویسی و سایر مهارت ها"
          link="/articles"
          color="bg-yellow-500"
        />
        {blogsData.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {blogsData
              .filter((blogsData) => blogsData.publish === 1)
              .map((blog) => (
                <ArticlesBox key={blog._id} {...blog} />
              ))}
          </div>
        ) : (
          "loading"
        )}
      </div>
      <SvgIcons />
    </section>
  );
}
