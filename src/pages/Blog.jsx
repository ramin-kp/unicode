import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import SvgIcons from "../components/assets/icons/SvgIcons";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      {/* <!--------------------------------  Blog-Header  --------------------------------> */}
      <Header />
      {/* <!--------------------------------  Blog-Section  --------------------------------> */}
      <main>
        <div className="container">
          <Breadcrumb />
          <section className="flex gap-x-10">
            <section className="p-5 bg-white dark:bg-black-400  rounded-2xl">
              <h1 className="pb-5 font-morabbaBold text-2xl/9 lg:text-4xl/[48px] text-zinc-700 dark:text-white border-b border-slate-200 dark:border-zinc-700">
                ساخت ماشین حساب با پایتون – به صورت رابط گرافیکی
              </h1>
              <div className="flex gap-x-5 my-5">
                <span className="flex items-end gap-x-3">
                  <svg className="w-5 h-5 text-zinc-700 dark:text-white">
                    <use href="#user-outline"></use>
                  </svg>

                  <span className="font-danaMedium text-xs text-zinc-700 dark:text-white">
                    نوشته شده از ramin-kp
                  </span>
                </span>
                <span className="flex items-end gap-x-3">
                  <svg className="w-5 h-5 text-zinc-700 dark:text-white">
                    <use href="#calendar-days"></use>
                  </svg>
                  <span className="font-danaMedium text-xs text-zinc-700 dark:text-white">
                    1402/08/17
                  </span>
                </span>
              </div>
              <img
                className="rounded-2xl my-5"
                src="/images/blog.jpg"
                alt="blog-img"
              />
              <p className="font-danaLight text-xl text-zinc-700 dark:text-white">
                ساخت ماشین حساب با پایتون معمولا از اولین پروژه‌هایی هست که
                برنامه‌نویس‌های پایتون به سراغش میرن تا سطح و دانش خودشون رو محک
                بزنن؛ یادگیری این پروژه، بخاطر چالش‌هایی که داره باعث می‌شه سطح
                خودتون رو در برنامه‌نویسی ارتقا بدید و وارد مراحل بعدی بشید تا
                پروژه‌های بزرگ‌تری رو توسعه بدید. در این مقاله ساخت ماشین حساب
                با پایتون رو به‌صورت خط به خط بهتون آموزش میدم تا درک عمیق‌تری
                از نوع فعالیت هر کد بدست بیارید؛ قطعا کدی که باهم روی اون کار
                می‌کنیم تنها روش ساخت ماشین حساب با پایتون نیست، شما با یادگیری
                ساختار این پروژه قادر خواهید بود طبق دانش خودتون اون رو توسعه و
                تغییر بدید، پس در ادامه مقاله همراه من باشید تا ساخت ماشین حساب
                رو شروع کنیم… شروع ساخت ماشین حساب با پایتون قبل از شروع خیلی
                خوبه که بدونید ماشین حسابی که قراره بسازیم چه شکلی هست و چه
                ویژگی‌هایی داره، که با ذهنیت کامل سراغ ساخت ماشین حساب با پایتون
                بریم؛ ابتدا تصویر ماشین حساب رو نشونتون میدم، بعد از اون
                ویژگی‌هایی که قراره براش قرار بدیم رو بهتون می‌گم.
              </p>
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
                    <Link className="inline-block w-[300px] leading-7" to="#">آموزش گام به گام ساخت ویروس با پایتون </Link>
                  </li>
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">
                      ساخت ماشین حساب با پایتون – به صورت رابط گرافیکی
                    </Link>
                  </li>
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">آموزش گام به گام ساخت ویروس با پایتون </Link>
                  </li>
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">زیر و بم لیست در پایتون + تمرین عملی </Link>
                  </li>
                  <li className="py-4 font-danaLight text-xl text-zinc-700 dark:text-white">
                    <Link className="inline-block w-[300px] leading-7" to="#">آموزش گام به گام ساخت ویروس با پایتون </Link>
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
