import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Rules() {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="p-5 mt-5 bg-white dark:bg-black-400 rounded-2xl ">
          <h1 className="pb-5 font-morabbaBold text-4xl text-zinc-700 dark:text-white border-b border-b-gray-400/60 dark:border-b-slate-400">
            شرایط و قوانین یونی کٌد
          </h1>
          <div>
            <h2 className="py-10 text-4xl dark:text-white">
              شرایط و قوانین استفاده از سرویس‌ها و خدمات یونی کٌد
            </h2>
            <p className="text-xl/10 text-zinc-700 dark:text-white">
              کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و
              کاربردی آکادمی یونی کٌد با دقت ملاحظه فرمایید.ورود کاربران به
              آکادمی یونی کٌد هنگام استفاده از پروفایل شخصی، تشویقی، ویدئوهای
              رسانه تصویری آکادمی یونی کٌد و سایر خدمات ارائه شده توسط آکادمی
              یونی کٌد به معنای آگاه بودن و پذیرفتن شرایط و قوانین و همچنین نحوه
              استفاده از سرویس‌‏ها و خدمات آکادمی یونی کٌد است. توجه داشته باشید
              که ثبت سفارش نیز در هر زمان به معنی پذیرفتن کامل کلیه شرایط و
              قوانین آکادمی یونی کٌد از سوی کاربر است. لازم به ذکر است شرایط و
              قوانین مندرج، جایگزین کلیه توافق‏‌های قبلی محسوب می‏‌شود.
            </p>
            <h2 className="py-10 text-4xl dark:text-white">شرایط محروم کردن کاربر از سرویس</h2>
            <p className="flex flex-col text-xl/10 text-zinc-700 dark:text-white">
              یونی کٌد در برخی شرایطی که خارج از عرف و شرع و منطق نیست. کاربر
              خود را از دادن سرویس محروم میکند و این مورد شامل دوره های نقدی نیز
              میباشد و درصورتی که موارد ذکر شده توسط کاربر انجام و تخطی از تعهد
              صورت گیرد. یونی کٌد بلافاصله سرویس او را تعلیق و هزینه آن کاربر را
              نیز بلوکه میکند
              <span>
                از آنجایی که دوره های خریداری شده توسط هر اکانت مختص همان شخص
                است:
              </span>
              <ul className="pr-8 child:py-3 child:marker:text-sky-500 list-disc">
                <li>
                  کاربر متعهد میشود که دوره خریداری شده توسط خودش را به دیگران
                  به اشتراک نگذارد
                </li>
                <li>
                  کاربر متعهد میشود که اکانت خود را در اختیار بقیه قرار ندهد
                </li>
                <li>
                  کاربر متعهد میشود که دوره خریداری شده توسط خود را برای اهداف
                  مختلف به فروش نگذارد
                </li>
                <li>
                  کاربر تعهد میدهد که دوره را فقط بصورت تکی خریداری کند و با دو
                  یا چند نفر اقدام به خرید نکند
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
