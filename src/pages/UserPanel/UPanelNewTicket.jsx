import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function UPanelNewTicket() {
  const [departments, setDepartments] = useState([]);
  const [departmentsSub, setDepartmentsSub] = useState([]);
  const [departmentID, setDepartmentId] = useState("-1");
  const [departmentsSubId, setDepartmentsSubId] = useState("-1");
  const [ticketTitle, setTicketTitle] = useState("");
  const [priority, setPriority] = useState("-1");
  const [ticketBody, setTicketBody] = useState("");
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("-1");
  const [fileData, setFileData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAllDepartments();
    getAllCourses();
  }, []);
  const getAllDepartments = async () => {
    const fetchGetAllDepartments = await fetch(
      "http://localhost:4000/v1/tickets/departments"
    );
    const data = await fetchGetAllDepartments.json();
    setDepartments(data);
  };
  const getAllDepartmentsSub = async (id) => {
    const fetchGetAllDepartmentsSub = await fetch(
      `http://localhost:4000/v1/tickets/departments-subs/${id}`
    );
    const data = await fetchGetAllDepartmentsSub.json();
    setDepartmentsSub(data);
  };
  const getAllCourses = async () => {
    const fetchAllCourses = await fetch(
      "http://localhost:4000/v1/users/courses/",
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      }
    );
    const data = await fetchAllCourses.json();
    setCourses(data);
  };
  const sendTicketHandler = async (e) => {
    e.preventDefault();
    if (
      departmentID === "-1" ||
      departmentsSubId === "-1" ||
      priority === "-1" ||
      !ticketBody ||
      !ticketTitle
    ) {
      swal({
        title: "لطفا کادر های مورد نظر را پرکنید",
        icon: "warning",
        button: "تایید",
      });
    } else {
      const sendTicket = await fetch("http://localhost:4000/v1/tickets", {
        method: "POST",
        body: JSON.stringify({
          departmentID,
          departmentSubID: departmentsSubId,
          title: ticketTitle,
          priority,
          body: ticketBody,
          course: courseId === "-1" ? undefined : courseId,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).token
          }`,
        },
      });
      if (sendTicket.ok) {
        swal({
          title: "تیکت شما با موفقیت ارسال شد",
          icon: "success",
          button: "تایید",
        }).then(() => navigate("/my-account/tickets"));
      }
    }
  };

  return (
    <section>
      <div className="container">
        <div className="p-5 bg-white dark:bg-black-400 rounded-xl">
          <h1 className="pb-3 font-danaMedium text-xl text-zinc-700 dark:text-white border-b border-gray-200 dark:border-zinc-700">
            ارسال تیکت
          </h1>
          <form className="grid grid-cols-2 gap-5 my-5 ">
            <div className="flex flex-col">
              <label>دپارتمان خود را انتخاب کنید</label>
              <select
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                onChange={(e) => {
                  setDepartmentId(e.target.value);
                  getAllDepartmentsSub(e.target.value);
                }}
              >
                <option value="-1">لطفا یک مورد را انتخاب کنید</option>
                {departments.map((department) => (
                  <option key={department._id} value={department._id}>
                    {department.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>نوع تیک خود را انتخاب کنید</label>
              <select
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                onChange={(e) => {
                  setDepartmentsSubId(e.target.value);
                }}
              >
                <option value="-1">لطفا یک مورد را انتخاب کنید</option>
                {departmentsSub.map((departmentSub) => (
                  <option key={departmentSub._id} value={departmentSub._id}>
                    {departmentSub.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>عنوان تیکت خود را وارد کنید</label>
              <input
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                type="text"
                placeholder="عنوان تیکت خود را وارد کنید"
                value={ticketTitle}
                onChange={(e) => setTicketTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>سطح الویت تیکت خود را مشخص کنید</label>
              <select
                className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="-1">لطفا یک مورد را انتخاب کنید</option>
                <option value="1">زیاد</option>
                <option value="2">متوسط</option>
                <option value="3">کم</option>
              </select>
            </div>
            {departmentsSubId === "63b688c5516a30a651e98156" && (
              <div className="flex flex-col">
                <label> دوره خود را خود را انتخاب کنید</label>
                <select
                  className="w-2/3 bg-gray-200 outline-none p-2.5 rounded"
                  onChange={(e) => setCourseId(e.target.value)}
                >
                  <option value="-1">
                    لطفا یک مورد از دوره‌ها را انتخاب کنید
                  </option>
                  {courses.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.course.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="flex flex-col col-start-1 col-end-3">
              <label>متن خود را وارد کنید</label>
              <textarea
                className="bg-gray-200 outline-none p-2.5 rounded"
                type="text"
                placeholder="متن خود را وارد کنید"
                value={ticketBody}
                onChange={(e) => setTicketBody(e.target.value)}
              />
            </div>
            <div className=" flex flex-col col-start-1 col-end-3">
              <label>فایل خود را آپلود کنید</label>
              <input
                className=" outline-none p-2.5 rounded"
                type="file"
                onChange={(e) => setFileData(e.target.files[0])}
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-2.5 py-2 bg-blue-500 hover:bg-blue-600 text-lg text-white rounded-lg"
                onClick={sendTicketHandler}
              >
                ارسال تیکت
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
