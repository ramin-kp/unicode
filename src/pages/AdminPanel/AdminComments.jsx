import React, { useEffect, useState } from "react";
import DataTable from "../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";

export default function AdminComments() {
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    getAllComments();
  }, []);
  const getAllComments = async () => {
    const getComments = await fetch("http://localhost:4000/v1/comments");
    const json = await getComments.json();
    setAllComments(json);
  };
  const showCommentHandler = (body) => {
    swal({
      title: body,
      button: "تایید",
    });
  };
  const acceptCommentHandler = async (commentID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    const getComments = await fetch(
      `http://localhost:4000/v1/comments/accept/${commentID}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      }
    );
    if (getComments.ok) {
      swal({
        title: "کامنت مورد نظر با موفقیت تایید شد",
        icon: "success",
        button: "تایید",
      }).then(() => getAllComments());
    }
  };
  const rejectCommentHandler = async (commentID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    const getComments = await fetch(
      `http://localhost:4000/v1/comments/reject/${commentID}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      }
    );
    if (getComments.ok) {
      swal({
        title: "کامنت مورد نظر با موفقیت رد شد",
        icon: "success",
        button: "تایید",
      }).then(() => getAllComments());
    }
  };
  const answerCommentHandler = (commentID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "پاسخ خود را وارد کنید",
      content: "input",
      button: "تایید",
    }).then(async (result) => {
      if (result) {
        const commentAnswer = { body: result };
        const getComments = await fetch(
          `http://localhost:4000/v1/comments/answer/${commentID}`,
          {
            method: "POST",
            body: JSON.stringify(commentAnswer),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        if (getComments.ok) {
          swal({
            title: "پاسخ کامنت مورد نظر با موفقیت ثبت شد",
            icon: "success",
            button: "تایید",
          }).then(() => getAllComments());
        }
      }
    });
  };
  const removeCommentHandler = async (commentID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    const getComments = await fetch(
      `http://localhost:4000/v1/comments/${commentID}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      }
    );
    if (getComments.ok) {
      swal({
        title: "کامنت مورد نظر با موفقیت تایید شد",
        icon: "success",
        button: "تایید",
      }).then(() => getAllComments());
    }
  };
  const banUserHandler = (userID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "آیا از مسدود کردن کاربر مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (result) => {
      if (result) {
        const getComments = await fetch(
          `http://localhost:4000/v1/users/ban/${userID}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        if (getComments.ok) {
          swal({
            title: " کاربر مورد نظر با موفقیت مسدود شد",
            icon: "success",
            button: "تایید",
          }).then(() => getAllComments());
        }
      }
    });
  };
  return (
    <section>
      <DataTable title="کامنت‌ها">
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>کاربر</th>
            <th>دوره</th>
            <th>مشاهده</th>
            <th>تایید</th>
            <th>پاسخ</th>
            <th>ویرایش</th>
            <th>حذف</th>
            <th>بن</th>
          </tr>
        </thead>
        <tbody>
          {allComments.length
            ? allComments.map((comment, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={comment._id}
                >
                  <td
                    className={`${
                      comment.answer === 1
                        ? "bg-primary text-white"
                        : "bg-red-500 text-white"
                    } text-center`}
                  >
                    {index + 1}
                  </td>
                  <td className="text-center dark:text-white">
                    {comment.creator && comment.creator.name}
                  </td>
                  <td className="text-center dark:text-white">
                    {comment.course}
                  </td>
                  <td className="text-center dark:text-white">
                    <button
                      className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                      onClick={() => showCommentHandler(comment.body)}
                    >
                      مشاهده
                    </button>
                  </td>
                  <td className="text-center dark:text-white">
                    {comment.answer ? (
                      <button
                        className="py-2 px-4 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                        onClick={() => rejectCommentHandler(comment._id)}
                      >
                        رد
                      </button>
                    ) : (
                      <button
                        className="py-2 px-2.5 bg-green-500 rounded-lg hover:bg-green-600 text-white text-base"
                        onClick={() => acceptCommentHandler(comment._id)}
                      >
                        تایید
                      </button>
                    )}
                  </td>
                  <td className="text-center dark:text-white">
                    <button
                      className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                      onClick={() => answerCommentHandler(comment._id)}
                    >
                      پاسخ
                    </button>
                  </td>
                  <td className="text-center dark:text-white">
                    <button
                      className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                      // onClick={() => updatecommentHandler(comment._id)}
                    >
                      ویرایش
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                      onClick={() => removeCommentHandler(comment._id)}
                    >
                      حذف
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                      onClick={() => banUserHandler(comment.creator._id)}
                    >
                      بن
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
