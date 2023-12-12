import React, { useEffect, useState } from "react";
import DataTable from "../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminContactUs() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getAllContact();
  }, []);
  const getAllContact = async () => {
    const fetchAllContact = await fetch("http://localhost:4000/v1/contact");
    const json = await fetchAllContact.json();
    setContacts(json);
  };
  console.log(contacts);
  const showMessageHandler = (text) => {
    swal({
      title: text,
      button: "تایید",
    });
  };
  const answerHandler = (email) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "متن خود را وارد کنید",
      content: "input",
    })
      .then(async (res) => {
        const answer = await fetch("http://localhost:4000/v1/contact/answer", {
          method: "POST",
          body: JSON.stringify({
            email,
            answer: res,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageData.token}`,
          },
        });
        return answer;
      })
      .then((res) => {
        if (res.ok) {
          swal({
            title: "پیام شما با موفقیت ارسال شد",
            icon: "success",
            button: "تایید",
          });
        }
      });
  };
  return (
    <section>
      <DataTable title={"پیغام‌ها"}>
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>نام کاربر</th>
            <th>ایمیل</th>
            <th>شماره تلفن</th>
            <th>مشاهده</th>
            <th>پاسخ</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length
            ? contacts.map((contact, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={contact._id}
                >
                  <td className="text-center dark:text-white">{index + 1}</td>
                  <td className="text-center dark:text-white">
                    {contact.name}
                  </td>
                  <td className="text-center dark:text-white">
                    {contact.email}
                  </td>
                  <td className="text-center dark:text-white">
                    {contact.phone}
                  </td>
                  <td className="text-center dark:text-white">
                    <button
                      className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                      onClick={() => showMessageHandler(contact.body)}
                    >
                      مشاهده پیغام
                    </button>
                  </td>
                  <td className="text-center dark:text-white">
                    <button
                      className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                      onClick={() => answerHandler(contact.email)}
                    >
                      پاسخ
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                      //   onClick={() => removeUserHandler(contact._id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </DataTable>
    </section>
  );
}
