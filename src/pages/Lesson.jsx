import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Accordion from "../components/Accordion/Accordion";
import SvgIcons from "../components/assets/icons/SvgIcons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Lesson() {
  const { courseName, sessionID } = useParams();
  const [session, setSession] = useState({});
  const [sessions, setSessions] = useState([]);
  const [course, setCourse] = useState([]);
  useEffect(() => {
    getAllSessions();
    getOneCourse();
  }, [sessionID]);
  const getAllSessions = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const getSessions = await fetch(
      `http://localhost:4000/v1/courses/${courseName}/${sessionID}`,
      {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      }
    );
    const json = await getSessions.json();
    setSession(json.session);
    setSessions(json.sessions);
  };
  const getOneCourse = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const getSessions = await fetch(
      `http://localhost:4000/v1/courses/${courseName}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${
            localStorageData ? localStorageData.token : null
          }`,
        },
      }
    );
    const json = await getSessions.json();
    setCourse(json);
  };
  return (
    <>
      {/* <!--------------------------------  Lesson-Header  --------------------------------> */}

      <Header />
      {/* <!--------------------------------  Lesson-Section  --------------------------------> */}

      <main>
        <div className="container">
          <Breadcrumb
            courseData={[
              {
                id: 1,
                path: course.shortName,
                name: course.name,
                size: 280,
              },
              {
                id: 2,
                path: "r",
                name: session.title,
                size: 0,
              },
            ]}
          />
          <section className="flex flex-col lg:flex-row  justify-between gap-x-5">
            <section className="flex flex-col gap-y-5 grow">
              <div className="p-5 bg-white dark:bg-black-400 rounded-2xl">
                <div className="flex items-center mb-5">
                  <span className="inline-block w-2.5 h-10 bg-sky-500 rounded-sm"></span>
                  <h1 className=" font-morabbaBold text-3xl text-zinc-700 dark:text-white mr-2.5">
                    {course.name}
                  </h1>
                </div>
                <video
                  className="w-full rounded-2xl overflow-hidden"
                  src={`http://localhost:4000/courses/covers/${session.video}`}
                  controls
                />
                <div className="flex items-center my-5 pb-16 border-b border-gray-200 dark:border-zinc-700">
                  {/* <span className="font-danaDemiBold text-2xl text-slate-500 dark:text-slate-400 pl-3.5 border-l border-gray-200 dark:border-zinc-700">
                    3
                  </span> */}{" "}
                  {/*no response data for index */}
                  <span className="w-5 h-5 bg-pink-600 dark:bg-pink-500 rounded-md"></span>
                  <h3 className="mr-3.5 font-danaDemiBold text-xl text-slate-500 dark:text-white">
                    {session.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <Link
                    className="flex-center py-2 px-3 rounded-xl bg-yellow-400 dark:bg-yellow-400/20 dark:text-yellow-400 hover:bg-yellow-500 hover:bg-yellow-600- text-white transition-all"
                    to="#"
                  >
                    <svg className="w-5 h-5 ml-1.5">
                      <use href="#email"></use>
                    </svg>
                    <span>دانلود پیوست</span>
                  </Link>
                  <Link
                    className="flex-center py-2 px-3 rounded-xl bg-gray-200 dark:bg-black-300 text-slate-500 dark:text-slate-400 hover:bg-gray-300 dark:hover:bg-black-100 transition-all"
                    to="#"
                  >
                    <svg className="w-5 h-5 ml-1.5">
                      <use href="#download"></use>
                    </svg>
                    <span>دانلود همگانی</span>
                  </Link>
                </div>
              </div>
              {/* aside for mobile responsive */}
              <aside className="flex flex-col gap-y-5 xl:hidden">
                <div className="bg-white dark:bg-black-400 rounded-2xl h-[700px] overflow-y-auto">
                  {/* <Accordion />
                  <Accordion /> */}
                </div>
                <div className="grid grid-cols-3 gap-x-3">
                  <div className="flex flex-col items-center justify-center gap-2.5 p-2 bg-white dark:bg-black-400 rounded-2xl">
                    <svg className="w-7 h-7 text-green-500">
                      <use href="#exclamation"></use>
                    </svg>
                    <h3 className="font-danaDemiBold text-zinc-700 dark:text-white text-lg text-center">
                      {course.status === "presell"
                        ? "پیش فروش"
                        : "در حال برگزاری"}
                    </h3>
                    <span className="text-xs text-slate-500">وضعیت دوره</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2.5 p-2 bg-white dark:bg-black-400 rounded-2xl">
                    <svg className="w-7 h-7 text-green-500">
                      <use href="#clock"></use>
                    </svg>
                    <h3 className="font-danaDemiBold text-zinc-700 dark:text-white text-lg text-center">
                      {course.price &&
                        (course.price === 0
                          ? "رایگان"
                          : course.price.toLocaleString())}
                    </h3>
                    <span className="text-xs text-slate-500">هزینه دوره</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2.5 p-2 bg-white dark:bg-black-400 rounded-2xl">
                    <svg className="w-7 h-7 text-green-500">
                      <use href="#video-camera"></use>
                    </svg>
                    <h3 className="font-danaDemiBold text-zinc-700 dark:text-white text-lg text-center">
                      {course.support}
                    </h3>
                    <span className="text-xs text-slate-500">
                      پشتیبانی دوره
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-white dark:bg-black-400 rounded-2xl">
                  <div className="flex items-center justify-between child:text-xl child:text-zinc-700 dark:child:text-white">
                    <h3 className="font-danaDemiBold">پیشرفت شما</h3>
                    <span>34%</span>
                  </div>
                  <span className="progress-course dark:before:bg-secondary-300 relative inline-block w-full h-2 mt-5 bg-gray-100 dark:bg-black-500 rounded-full"></span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2.5 py-5 bg-white dark:bg-black-400  rounded-2xl">
                  <div className="w-[90px] h-[90px]">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={`${course.creator && course.creator.profile}`}
                      alt="teacher-avatar"
                    />
                  </div>
                  <h1 className="font-danaLight text-2xl text-zinc-700 dark:text-white text-center">
                    {course.creator && course.creator.name}
                  </h1>
                  <Link className="flex items-center justify-center gap-1 text-slate-500 dark:text-slate-400 text-center">
                    مدرس دوره
                    <svg className="w-6 h-6">
                      <use href="#logout"></use>
                    </svg>
                  </Link>
                </div>
              </aside>
              {/* question and answer div */}
              <div className="p-5 bg-white dark:bg-black-400 rounded-2xl">
                <div className="flex items-center mb-5">
                  <span className="inline-block w-2.5 h-10 bg-rose-500 rounded-sm"></span>
                  <h1 className=" font-morabbaBold text-3xl text-zinc-700 dark:text-white mr-2.5">
                    پرسش و پاسخ
                  </h1>
                </div>
                <div className="flex items-center my-5">
                  <img
                    className="w-14 h-14 rounded-full object-cover ml-4"
                    src="/images/teacher.jpg"
                    alt="user-avatar"
                  />
                  <div>
                    <h4 className="font-danaMedium text-zinc-700 dark:text-white text-xl">
                      ramin
                    </h4>
                    <span className="font-danaLight text-slate-500 dark:text-slate-400 text-xs">
                      پرسش جدید
                    </span>
                  </div>
                </div>
                <textarea className="w-full h-36 mb-5 p-5 bg-gray-100 dark:bg-black-300 font-danaMedium text-zinc-700 dark:text-white rounded-xl outline-none"></textarea>
                <div className="flex items-center justify-between mb-5">
                  <Link
                    className="flex-center gap-x-2.5 py-2 px-4 bg-gray-200 dark:bg-black-300 hover:bg-gray-300 dark:hover:bg-black-100 text-slate-500 dark:text-slate-400 rounded-xl"
                    to="#"
                  >
                    <svg className="w-5 h-5">
                      <use href="#paper-clip"></use>
                    </svg>
                    <span>پیوست</span>
                  </Link>
                  <div className="flex items-center gap-2.5">
                    <button className="bg-gray-200 dark:bg-black-300 dark:hover:bg-black-100 hover:bg-gray-300 py-2 px-4 text-slate-500 dark:text-slate-400 rounded-xl transition-all">
                      حذف
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 py-2 px-4 text-white rounded-xl transition-all">
                      ارسال
                    </button>
                  </div>
                </div>
                <p className="font-danaLight text-base text-zinc-700 dark:text-white">
                  هنوز برای این جلسه سوالی نپرسیده‌اید!
                </p>
              </div>
              {/* aside for Desktop responsive */}
            </section>
            <aside className="hidden xl:flex flex-col gap-y-5 xl:max-w-[380px]">
              <div className="bg-white dark:bg-black-400 rounded-2xl h-[700px] overflow-y-auto">
                <Accordion
                  accordionData={sessions}
                  userRegister={course.isUserRegisteredToThisCourse}
                />
              </div>
              <div className="grid grid-cols-3 gap-x-3">
                <div className="flex flex-col items-center justify-center gap-2.5 p-2 bg-white dark:bg-black-400 rounded-2xl">
                  <svg className="w-7 h-7 text-green-500">
                    <use href="#exclamation"></use>
                  </svg>
                  <h3 className="font-danaDemiBold text-zinc-700 dark:text-white text-base text-center">
                    {course.status === "presell" ? "پیش فروش" : "درحال برگزاری"}
                  </h3>
                  <span className="text-xs text-slate-500">وضعیت دوره</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2.5 p-2 bg-white dark:bg-black-400 rounded-2xl">
                  <svg className="w-7 h-7 text-green-500">
                    <use href="#clock"></use>
                  </svg>
                  <h3 className="font-danaDemiBold text-zinc-700 dark:text-white text-base text-center">
                    {course.price &&
                      (course.price === 0
                        ? "رایگان"
                        : course.price.toLocaleString())}
                  </h3>
                  <span className="text-xs text-slate-500">هزینه دوره</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2.5 p-2 bg-white dark:bg-black-400 rounded-2xl">
                  <svg className="w-7 h-7 text-green-500">
                    <use href="#video-camera"></use>
                  </svg>
                  <h3 className="font-danaDemiBold text-zinc-700 dark:text-white text-base text-center">
                    {course.support}
                  </h3>
                  <span className="text-xs text-slate-500">پشتیبانی دوره</span>
                </div>
              </div>
              <div className="p-5 bg-white dark:bg-black-400 rounded-2xl">
                <div className="flex items-center justify-between child:text-xl child:text-zinc-700 dark:child:text-white">
                  <h3 className="font-danaDemiBold">پیشرفت شما</h3>
                  <span>34%</span>
                </div>
                <span className="progress-course dark:before:bg-secondary-300 relative inline-block w-full h-2 mt-5 bg-gray-100 dark:bg-black-500 rounded-full"></span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2.5 py-5 bg-white dark:bg-black-400  rounded-2xl">
                <div className="w-[90px] h-[90px]">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={course.creator && course.creator.profile}
                    alt="teacher-avatar"
                  />
                </div>
                <h1 className="font-danaLight text-2xl text-zinc-700 dark:text-white text-center">
                  {course.creator && course.creator.name}
                </h1>
                <Link className="flex items-center justify-center gap-1 text-slate-500 dark:text-slate-400 text-center">
                  مدرس دوره
                  <svg className="w-6 h-6">
                    <use href="#logout"></use>
                  </svg>
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </main>
      {/* <!--------------------------------  Lesson-Footer  --------------------------------> */}

      <Footer />
      <SvgIcons />
    </>
  );
}
