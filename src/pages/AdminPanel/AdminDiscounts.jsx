import React, { useState } from "react";
import swal from "sweetalert";

export default function AdminDiscounts() {
  const [discountBody, setDiscountBody] = useState("");
  const createDiscountHandler = async (e) => {
    e.preventDefault();
    if (!discountBody) {
      swal({
        title: "کادر موردنظر را پرکنید",
        button: "تایید",
      });
    } else {
      const fetchCreateDiscount = await fetch(
        "http://localhost:4000/v1/offs/all",
        {
          method: "POST",
          body: JSON.stringify({
            discount: discountBody,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).token
            }`,
          },
        }
      );
      console.log(fetchCreateDiscount.json)
      if (fetchCreateDiscount.ok) {
        swal({
          title: "کد تخفیف با موفقیت همگانی اعمال شد",
          icon: "success",
          button: "تایید",
        });
      }
    }
  };
  return (
    <section>
      <form className="grid grid-cols-2 gap-x-10 gap-y-5  mb-2.5 child:flex child:flex-col child:justify-end child:w-2/3 child:outline-none">
        <div>
          <label className="font-danaBold text-lg text-zinc-700 dark:text-white">
            کد تخفیف
          </label>
          <input
            className="h-full px-2.5 py-2  bg-transparent font-danaMedium text-lg text-zinc-700 dark:text-white border-2 border-slate-500/60 dark:border-slate-400/60 rounded-md outline-none"
            type="text"
            value={discountBody}
            onChange={(e) => setDiscountBody(e.target.value)}
            placeholder="میزان تخفیف را وارد کنید..."
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-1/3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
            onClick={createDiscountHandler}
          >
            اعمال کمپین
          </button>
        </div>
      </form>
    </section>
  );
}
