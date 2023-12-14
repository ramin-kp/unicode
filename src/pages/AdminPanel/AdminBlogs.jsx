import React, { useEffect, useState } from "react";
import DataTable from "./../../components/PanelAdmin/DataTable/DataTable";
import swal from "sweetalert";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blogContent, setBlogContent] = useState("");
  const [blogCategory, setBlogCategory] = useState("-1");
  const [blogCover, setBlogCover] = useState({});
  const [newBlog, setNewBlog] = useState({
    title: "",
    shortName: "",
    description: "",
  });

  useEffect(() => {
    getAllBlogs();
    getCategory();
  }, []);
  const getCategory = async () => {
    const fetchCategoriesInfo = await fetch(
      "http://localhost:4000/v1/category"
    );
    const json = await fetchCategoriesInfo.json();
    setCategories(json);
  };
  const getAllBlogs = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const getBlogs = await fetch("http://localhost:4000/v1/articles", {
      headers: { Authorization: `Bearer ${localStorageData.token}` },
    });
    const json = await getBlogs.json();
    setBlogs(json);
  };
  const removeBlogHandler = (blogID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "آیا از حذف بلاگ مطمون هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (res) => {
      if (res) {
        const removeBlog = await fetch(
          `http://localhost:4000/v1/articles/${blogID}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        if (removeBlog.ok) {
          swal({
            title: "بلاگ مورد نظر با موفقیت حذف شد",
            icon: "success",
            button: "تایید",
          }).then(() => {
            getAllBlogs();
          });
        }
      }
    });
  };
  const inputHandler = (e) => {
    setNewBlog(() => ({ ...newBlog, [e.target.name]: e.target.value }));
  };
  const addNewBlogHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("body", blogContent);
    formData.append("shortName", newBlog.shortName);
    formData.append("categoryID", blogCategory);
    formData.append("cover", blogCover);
    if (blogCategory === "-1") {
      swal({
        title: "لطفا دسته بندی خود را انتخاب کنید",
        icon: "error",
        button: "تایید",
      });
    } else {
      const addBlog = await fetch("http://localhost:4000/v1/articles", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      if (addBlog.ok) {
        swal({
          title: "بلاگ مورد نظر با موفقیت اضافه شد",
          icon: "success",
          button: "تایید",
        }).then(getAllBlogs());
      }
    }
  };
  const addNewBlogAssDraftHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("body", blogContent);
    formData.append("shortName", newBlog.shortName);
    formData.append("categoryID", blogCategory);
    formData.append("cover", blogCover);
    if (blogCategory === "-1") {
      swal({
        title: "لطفا دسته بندی خود را انتخاب کنید",
        icon: "error",
        button: "تایید",
      });
    } else {
      const addBlog = await fetch("http://localhost:4000/v1/articles/draft", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      if (addBlog.ok) {
        swal({
          title: "بلاگ مورد نظر با موفقیت پیش نویس شد",
          icon: "success",
          button: "تایید",
        }).then(getAllBlogs());
      }
    }
  };
  return (
    <section>
      <form className="grid grid-cols-2 gap-2 mb-5 child:flex child:flex-col child:my-2 ">
        <div className="font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>عنوان </label>
          <input
            className="w-2/3 py-2 px-5 bg-transparent border-2 border-slate-500 dark:border-slate-400 rounded outline-none"
            type="text"
            name="title"
            placeholder="عنوان دوره را وارد کنید..."
            value={newBlog.title}
            onChange={inputHandler}
          />
        </div>
        <div className="font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>لینک</label>
          <input
            className="w-2/3 py-2 px-5 bg-transparent border-2 border-slate-500 dark:border-slate-400 rounded outline-none"
            type="text"
            name="shortName"
            placeholder="url دوره را وارد کنید..."
            value={newBlog.shortName}
            onChange={inputHandler}
          />
        </div>
        <div className="col-start-1 col-span-2 font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>چکیده</label>
          <textarea
            className="py-2 px-5 bg-transparent border-2 border-slate-500 dark:border-slate-400 rounded outline-none"
            type="text"
            name="description"
            placeholder="توضیحات دوره را وارد کنید..."
            value={newBlog.description}
            onChange={inputHandler}
          />
        </div>
        <div className="col-start-1 col-end-3">
          <CKEditor
            editor={ClassicEditor}
            data={blogContent}
            onChange={(event, editor) => {
              const data = editor.getData();
              setBlogContent(data);
            }}
          />
        </div>
        <div className="w-2/3 font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>کاور</label>
          <input
            type="file"
            onChange={(e) => setBlogCover(e.target.files[0])}
          />
        </div>
        <div className="w-2/3 font-danaMedium text-lg text-zinc-700 dark:text-white">
          <label>دسته بندی</label>
          <select
            className="py-2 px-5"
            onChange={(e) => setBlogCategory(e.target.value)}
          >
            <option value="-1">لطفا دسته بندی خود را انتخاب کنید</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex !flex-row w-full gap-x-5">
          <button
            type="submit"
            className="w-1/3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
            onClick={addNewBlogHandler}
          >
            انتشار بلاگ
          </button>
          <button
            type="submit"
            className="w-1/3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md "
            onClick={addNewBlogAssDraftHandler}
          >
            پیش نویس بلاگ
          </button>
        </div>
      </form>
      <DataTable title={"وبلاگ‌ها"}>
        <thead className="w-full">
          <tr className=" child:p-2 bg-sky-50 dark:bg-secondary-300 child:text-lg child:font-danaMedium child:text-zinc-700 dark:child:text-white">
            <th>شناسه</th>
            <th>عنوان</th>
            <th>لینک</th>
            <th>نویسنده</th>
            <th>وضعیت</th>
            <th>مشاهده</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length
            ? blogs.map((blog, index) => (
                <tr
                  className="child:p-2.5 child:text-lg dark:text-white odd:bg-white dark:odd:bg-black-100 even:bg-slate-50 dark:even:bg-black-200 "
                  key={blog._id}
                >
                  <td className="text-center dark:text-white">{index + 1}</td>
                  <td className="text-center dark:text-white">{blog.title}</td>

                  <td className="text-center dark:text-white">
                    {blog.shortName}
                  </td>
                  <td className="text-center dark:text-white">
                    {blog.creator.name}
                  </td>
                  <td className="text-center dark:text-white">
                    {blog.publish === 1 ? "منتشر شده" : "پیش نویس"}
                  </td>
                  <td className="text-center dark:text-white">
                    {blog.publish === 1 ? (
                      <svg className="w-7 h-7 mx-auto text-green-700">
                        <use href="#check"></use>
                      </svg>
                    ) : (
                      <Link
                        className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base"
                        to={`draft/${blog.shortName}`}
                      >
                        ادامه نوشتن
                      </Link>
                    )}
                  </td>
                  <td className="text-center dark:text-white">
                    <button className="py-2 px-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-base">
                      ویرایش
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="py-2 px-2.5 bg-red-500 rounded-lg hover:bg-red-600 text-white text-base"
                      onClick={() => removeBlogHandler(blog._id)}
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
