import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export default function Blog() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <Breadcrumb />
        </div>
      </section>
      <Footer />
    </>
  );
}
