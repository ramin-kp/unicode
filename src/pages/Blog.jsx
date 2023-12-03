import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import SvgIcons from "../components/assets/icons/SvgIcons";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const { articleName } = useParams();

  useEffect(() => {
    getBlogData();
  }, []);
  const getBlogData = async () => {
    const fetchData = await fetch(
      `http://localhost:4000/v1/articles/${articleName}`
    );
    const json = await fetchData.json();
    console.log(json);
    setBlog(json);
  };
  return (
    <>
      {/* <!--------------------------------  Blog-Header  --------------------------------> */}
      <Header />
      {/* <!--------------------------------  Blog-Section  --------------------------------> */}
      <main>
        <div className="container">
          <Breadcrumb
            courseData={[
              {
                id: 1,
                path: "/blog",
                name: "وبلاگ",
              },
              {
                id: 2,
                path: blog.shortName,
                name: blog.title,
              },
            ]}
          />
          <section className="flex gap-x-10">
            <section className="grow p-5 bg-white dark:bg-black-400  rounded-2xl">
              <h1 className="pb-5 font-morabbaBold text-2xl/9 lg:text-4xl/[48px] text-zinc-700 dark:text-white border-b border-slate-200 dark:border-zinc-700">
                {blog.title}
              </h1>
              <div className="flex gap-x-5 my-5">
                <span className="flex items-end gap-x-3">
                  <svg className="w-5 h-5 text-zinc-700 dark:text-white">
                    <use href="#user-outline"></use>
                  </svg>

                  <span className="font-danaMedium text-xs text-zinc-700 dark:text-white">
                    نوشته از {blog.creator && blog.creator.name}
                  </span>
                </span>
                <span className="flex items-end gap-x-3">
                  <svg className="w-5 h-5 text-zinc-700 dark:text-white">
                    <use href="#calendar-days"></use>
                  </svg>
                  <span className="font-danaMedium text-xs text-zinc-700 dark:text-white">
                    {blog.updatedAt && blog.updatedAt.slice(0, 10)}
                  </span>
                </span>
              </div>
              <img
                className="rounded-2xl my-5 mx-auto"
                src={`http://localhost:4000/courses/covers/${blog.cover}`}
                alt="blog-img"
              />
              <div
                className="blog__details font-danaLight text-xl text-zinc-700 dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.body),
                }}
              ></div>
              <div className="flex-center mx-auto my-5">
                <span className="py-4 px-9 bg-green-500 hover:bg-green-600 text-lg text-center text-white rounded-full cursor-pointer transition-colors">
                  مشاهده بیشتر
                </span>
              </div>
            </section>
            <aside className="hidden lg:flex flex-col gap-y-5 shrink-0">
              <div className=" bg-white py-5 dark:bg-black-400  rounded-2xl">
                <div className="flex items-center justify-start">
                  <span className="w-7 h-2 bg-yellow-400 rounded-sm"></span>
                  <h3 className="mr-2.5 text-zinc-700 dark:text-white font-danaBold text-2xl">
                    لینک کوتاه:
                  </h3>
                </div>
                <div className="flex items-start justify-between gap-x-5 m-5 px-3 py-5 bg-gray-100 dark:bg-black-300 border border-dashed border-slate-500 dark:border-slate-400 rounded-xl ">
                  <svg className="w-6 h-6 text-slate-500 dark:text-slate-400">
                    <use href="#clipboard"></use>
                  </svg>
                  <span className="text-slate-500 dark:text-slate-400 text-xl">
                    https://unicode.ir/?p=2864
                  </span>
                </div>
              </div>
              <div className=" bg-white py-5 dark:bg-black-400  rounded-2xl">
                <div className="flex items-center justify-start">
                  <span className="w-7 h-2 bg-rose-500 rounded-sm"></span>
                  <h3 className="mr-2.5 text-zinc-700 dark:text-white font-danaBold text-2xl">
                    جدیترین نوشته‌ها
                  </h3>
                </div>
                <ul className="px-6 divide-y divide-dashed divide-slate-400">
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">
                      آموزش گام به گام ساخت ویروس با پایتون{" "}
                    </Link>
                  </li>
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">
                      ساخت ماشین حساب با پایتون – به صورت رابط گرافیکی
                    </Link>
                  </li>
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">
                      آموزش گام به گام ساخت ویروس با پایتون{" "}
                    </Link>
                  </li>
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">
                      زیر و بم لیست در پایتون + تمرین عملی{" "}
                    </Link>
                  </li>
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">
                      آموزش گام به گام ساخت ویروس با پایتون{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:flex flex-col py-5 bg-white dark:bg-black-400 text-slate-500 dark:text-slate-400 rounded-2xl">
                <span className="flex items-center mb-2 text-zinc-700 font-danaDemiBold text-2xl dark:text-white">
                  <span className="block w-7 h-2 bg-green-500 rounded-sm ml-2.5"></span>
                  دسته بندی ها
                </span>
                <div className="flex flex-col items-start gap-5 px-5 mt-2 child:flex-center">
                  <Link className="flex" to="#">
                    <svg className="w-5 h-5 text-green-500 rotate-180">
                      <use href="#play-solid"></use>
                    </svg>
                    <span className="font-danaLight text-xl text-zinc-700 dark:text-white mr-2.5">
                      طراحی سایت
                    </span>
                  </Link>
                  <Link className="flex" to="#">
                    <svg className="w-5 h-5 text-green-500 rotate-180">
                      <use href="#play-solid"></use>
                    </svg>
                    <span className="font-danaLight text-xl text-zinc-700 dark:text-white mr-2.5">
                      کسب درامد از برنامه نویسی
                    </span>
                  </Link>
                  <Link className="flex" to="#">
                    <svg className="w-5 h-5 text-green-500 rotate-180">
                      <use href="#play-solid"></use>
                    </svg>
                    <span className="font-danaLight text-xl text-zinc-700 dark:text-white mr-2.5">
                      طراحی سایت
                    </span>
                  </Link>
                  <Link className="flex" to="#">
                    <svg className="w-5 h-5 text-green-500 rotate-180">
                      <use href="#play-solid"></use>
                    </svg>
                    <span className="font-danaLight text-xl text-zinc-700 dark:text-white mr-2.5">
                      طراحی سایت
                    </span>
                  </Link>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      {/* <!--------------------------------  Blog-Footer  --------------------------------> */}
      <Footer />
      <SvgIcons />
    </>
  );
}
