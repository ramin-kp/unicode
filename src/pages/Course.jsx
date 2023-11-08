import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import SvgIcons from "../components/assets/icons/SvgIcons";
export default function Course() {
  return (
    <div>
      {/* <!--------------------------------  Course-Header  --------------------------------> */}
      <Header />
      {/* <!--------------------------------  Course-Main  --------------------------------> */}
      <main>
        <div className="container">
          <Breadcrumb />
          <section className="flex items-start justify-between gap-x-10 h-[356px]">
            <div className="flex flex-col items-start justify-between h-full">
              <div>
                <h1 className="mb-5 font-morabbaBold text-3xl text-zinc-700 dark:text-white">
                  زیر و بَم و منطق دیپلوی برای برنامه نویسان JS
                </h1>
                <p className="p text-zinc-700 dark:text-white font-danaLight text-xl line-clamp-3">
                  تو هر فیلدی فعالیت بکنی برای پرزنت خودت تو بازار کار و نمایش
                  نمونه کارات نیاز به دپلوی داری. تو این دوره همه راه و روش های
                  موجود واسه دپلوی پروژه های مرتبط با دنیای جاوا اسکریپت رو یاد
                  می‌گیری.
                </p>
              </div>
              <div className="flex items-end justify-between w-full">
                <Link className="flex-center p-4 bg-green-400  dark:bg-primary hover:bg-green-500 dark:hover:bg-green-500 text-white font-danaBold text-xl transition-all rounded-xl">
                  <svg className="w-8 h-8">
                    <use href="#play-outline"></use>
                  </svg>
                  ثبت نام در دوره
                </Link>
                <div>
                  <span className="text-zinc-700 dark:text-white  font-danaBold text-3xl">
                    700,000
                  </span>
                  <span className="text-zinc-700 dark:text-white  font-danaLight text-base">
                    تومان
                  </span>
                </div>
              </div>
            </div>

            <video
              className="w-full h-full rounded-3xl object-cover  shadow-md"
              src="/videos/tizer.mp4"
              controls
            />
          </section>
          <section className="flex gap-5 mt-10">
            {/* Course-info */}
            <div className="flex flex-col gap-5 grow">
              <div className="grid grid-cols-3 gap-5">
                <div className="flex items-center justify-start gap-x-6 bg-white dark:bg-black-400 px-6 py-7 text-lg rounded-2xl">
                  <svg className="w-10 h-10 text-green-500">
                    <use href="#exclamation"></use>
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-danaMedium text-zinc-700 dark:text-white">
                      وضعیت دوره
                    </span>
                    <span className="font-danaLight text-slate-500 dark:text-slate-400">
                      پیش فروش
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-x-6 bg-white dark:bg-black-400 px-6 py-7 text-lg rounded-2xl">
                  <svg className="w-10 h-10 text-green-500">
                    <use href="#clock"></use>
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-danaMedium text-zinc-700 dark:text-white">
                      مدت زمان دوره
                    </span>
                    <span className="font-danaLight text-slate-500 dark:text-slate-400">
                      0 ساعت
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-x-6 bg-white dark:bg-black-400 px-6 py-7 text-lg rounded-2xl">
                  <svg className="w-10 h-10 text-green-500">
                    <use href="#calendar"></use>
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-danaMedium text-zinc-700 dark:text-white">
                      آخرین بروزرسانی
                    </span>
                    <span className="font-danaLight text-slate-500 dark:text-slate-400">
                      1402/08/01
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-x-6 bg-white dark:bg-black-400 px-6 py-7 text-lg rounded-2xl">
                  <svg className="w-10 h-10 text-green-500">
                    <use href="#users"></use>
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-danaMedium text-zinc-700 dark:text-white">
                      روش پشتیبانی
                    </span>
                    <span className="font-danaLight text-slate-500 dark:text-slate-400">
                      آنلاین
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-x-6 bg-white dark:bg-black-400 px-6 py-7 text-lg rounded-2xl">
                  <svg className="w-10 h-10 text-green-500">
                    <use href="#briefcase"></use>
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-danaMedium text-zinc-700 dark:text-white">
                      پیش نیاز
                    </span>
                    <span className="font-danaLight text-slate-500 dark:text-slate-400">
                      js
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-x-6 bg-white dark:bg-black-400 px-6 py-7 text-lg rounded-2xl">
                  <svg className="w-10 h-10 text-green-500">
                    <use href="#video-camera"></use>
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-danaMedium text-zinc-700 dark:text-white">
                      نوع مشاهده
                    </span>
                    <span className="font-danaLight text-slate-500 dark:text-slate-400">
                      بصورت آنلاین
                    </span>
                  </div>
                </div>
              </div>
              {/* Course-description */}
              <div className="bg-white rounded-2xl px-5 py-6">
                <div className="flex items-center ">
                  <span className="inline-block w-2.5 h-10 bg-pink-500 rounded-sm"></span>
                  <p className="mr-3 font-morabbaBold text-zinc-700 dark:text-white text-3xl">
                    توضیحات
                  </p>
                </div>
                <p className="font-danaLight text-xl text-red-500 mt-9">
                  توجه! این دوره بصورت پیش فروش ارائه شده است و در تاریخ دی ماه
                  ۱۴۰۲ بصورت قعطی برگزار میشود و قیمت پیش فروش شده بعد از شروع
                  دوره چند ده درصد افزایش پیدا میکند و مطابق سیاست های سبزلرن.
                  بعد از اتمام نیز افزایش قیمت خواهد داشت. فلذا خرید در شرایط
                  پیش فروش بسیار پایین تر از قیمت اصلی تمام شده است
                </p>
                <div className="flex-center">
                  <span className="inline-block px-11 py-3 mx-auto my-6 bg-green-500 hover:bg-green-600 dark:bg-primary dark:hover:bg-green-600 text-white font-danaBold text-xl rounded-full cursor-pointer">
                    مشاهده بیشتر
                  </span>
                </div>
              </div>
              {/* Course-acadian */}
            </div>
            {/* Course-aside */}
            <aside className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 px-4 py-5 bg-white dark:bg-black-400  rounded-2xl">
                <div className="flex items-center justify-between gap-x-5 ">
                  <div className="flex items-center justify-between gap-16 bg-gray-100 dark:bg-black-300 px-6 py-2.5 rounded-2xl">
                    <svg className="w-8 h-8 text-green-500">
                      <use href="#users-solid"></use>
                    </svg>
                    <div>
                      <p className="text-center text-zinc-700 dark:text-white font-danaBold text-2xl">
                        12
                      </p>
                      <span className="text-center text-slate-500 dark:text-slate-400 text-sm">
                        دانشجو
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-16 bg-gray-100 dark:bg-black-300 px-6 py-2.5 rounded-2xl">
                    <svg className="w-8 h-8 text-yellow-400">
                      <use href="#star"></use>
                    </svg>
                    <div>
                      <p className="text-center text-zinc-700 dark:text-white font-danaBold text-2xl">
                        4.6
                      </p>
                      <span className="text-center text-slate-500 dark:text-slate-400 text-sm">
                        رضایت
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between p-1 child:text-zinc-700 dark:child:text-white child:text-xl">
                    <p>درصد تکمیل دوره</p>
                    <span>34%</span>
                  </div>
                  <span className="progress-course dark:before:bg-secondary-300 relative inline-block w-full h-2 bg-gray-100 dark:bg-black-500 rounded-full"></span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2.5  bg-white dark:bg-black-400  rounded-2xl">
                <div className="w-[90px] h-[90px]">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="/images/teacher.jpg"
                    alt="teacher-avatar"
                  />
                </div>
                <h1 className="font-danaLight text-2xl text-zinc-700 dark:text-white text-center">
                  رامین کریم پور
                </h1>
                <Link className="flex items-center justify-center gap-1 text-slate-500 dark:text-slate-400 text-center">
                  مدرس دوره
                  <svg className="w-6 h-6">
                    <use href="#logout"></use>
                  </svg>
                </Link>
              </div>
              <div className=" bg-white py-5 dark:bg-black-400  rounded-2xl">
                <div className="flex items-center justify-start">
                  <span className="w-7 h-2 bg-yellow-400 rounded-sm"></span>
                  <h3 className="mr-2.5 text-zinc-700 dark:text-white font-danaBold text-2xl">
                    لینک کوتاه:
                  </h3>
                </div>
                <div className="flex items-center justify-between m-5 px-3 py-5 bg-gray-100 dark:bg-black-300 border border-dashed border-slate-500 dark:border-slate-400 rounded-xl ">
                  <svg className="w-6 h-6 text-slate-500 dark:text-slate-400">
                    <use href="#clipboard"></use>
                  </svg>
                  <span className="text-slate-500 dark:text-slate-400 text-xl">
                    https://unicode.ir/?p=2864
                  </span>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      {/* <!--------------------------------  Course-Footer  --------------------------------> */}
      <Footer />
      <SvgIcons />
    </div>
  );
}
