import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section>
            <div className="flex-col w-full mt-10 py-5 child:my-5 bg-rose-500 font-morabbaBold text-2xl lg:text-4xl text-white text-center rounded-2xl">
              <h1>این صفحه در حال توسعه است.😊</h1>
              <p>برای ارسال پیام لینک زیر را کلیک کنید</p>
              <Link className="px-5 py-2 mt-5 font-danaMedium text-lg border border-white rounded-xl hover:bg-white hover:text-zinc-700 transition-all" to="/contact" >ارسال پیام</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
