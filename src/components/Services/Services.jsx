import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ServicesBox from "../ServicesBox/ServicesBox";

export default function Services() {
  return (
    <section>
      <div className="container">
        <SectionHeader
          color="bg-sky-500"
          title="ما چه خدماتی ارئه می‌کنیم؟"
          description="از اونجایی که آکادمی آموزشی یونی کٌد یک آکادمی خصوصی هست"
          link={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ServicesBox
            title="دوره های اختصاصی"
            description="با پشتیبانی و کیفیت بالا ارائه میده. چون خوش نام بودن نام برند و منافع مشتری و حفظ شان دیگر همکارانش براش مهمه"
            color="text-orange-500"
            svg="#pc"
          />
          <ServicesBox
            title="اجازه تدریس"
            description="به هر مدرسی رو نمیده و فقط فقط با مدرسای سینیور و مید لول وارد همکاری میشه چون کیفیت براش مهمه"
            color="text-rose-500"
            svg="#code"
          />
          <ServicesBox
            title="دوره پولی یا رایگان"
            description="براش مهم نیست. به مدرسینش بهترین مزایا و دستمزد رو میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده"
            color="text-purple-500"
            svg="#dollar"
          />
          <ServicesBox
            title="اولویت بندی به ترتیب منافع"
            description="در یونی کٌد اولویت اول با مدرس هست چون اون قراره دل بسوزونه. اولویت دوم با کاربره چون باید کمکش کرد و درنهایت اولویت آخر با یونی کٌد"
            color="text-teal-500"
            svg="#pc"
          />
        </div>
      </div>
    </section>
  );
}
