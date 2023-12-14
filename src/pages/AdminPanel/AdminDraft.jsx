import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import swal from "sweetalert";

export default function AdminDraft() {
  const [newBlog, setNewBlog] = useState({
    title: "",
    shortName: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);
  const [blogBody, setBlogBody] = useState("");
  const [blogID, setBlogID] = useState("");
  const [blogCover, setBlogCover] = useState({});
  const [blogCategory, setBlogCategory] = useState("-1");
  const { shortName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getDraftBlog();
    getCategory();
  }, []);
  const getDraftBlog = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const getBlog = await fetch(
      `http://localhost:4000/v1/articles/${shortName}`,
      { headers: { Authorization: `Bearer ${localStorageData}` } }
    );
    const json = await getBlog.json();
    setNewBlog(() => ({
      ...newBlog,
      title: json.title,
      shortName: json.shortName,
      description: json.description,
    }));
    setBlogBody(json.body);
    setBlogID(json._id);
    setBlogCategory(json.categoryID._id);
    console.log(json);
  };

  const getCategory = async () => {
    const fetchCategoriesInfo = await fetch(
      "http://localhost:4000/v1/category"
    );
    const json = await fetchCategoriesInfo.json();
    setCategories(json);
  };

  const inputHandler = (e) => {
    setNewBlog(() => ({
      ...newBlog,
      [e.target.name]: e.target.value,
    }));
  };
  const addNewBlogHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("body", blogBody);
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
        }).then(async () => {
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
            console.log("remove");
            navigate("/p-admin/blogs", { replace: true });
          }
        });
      }
    }
  };
  const addNewBlogAssDraftHandler = async (e) => {
    e.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    let formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("description", newBlog.description);
    formData.append("body", blogBody);
    formData.append("shortName", newBlog.shortName);
    formData.append("categoryID", blogCategory);
    formData.append("cover", blogCover);
    try {
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
        }).then(async () => {
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
          }
          getDraftBlog();
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      swal({
        title: "مشکلی پیش آمده لطفا دوباره امتحان کنید",
        text: "مطمئن شوید که عکس کاور خود را انتخاب کرده اید",
        icon: "error",
        button: "تایید",
      });
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
            data={blogBody}
            onChange={(event, editor) => {
              const data = editor.getData();
              setBlogBody(data);
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
            className="py-2 px-5 outline-none rounded"
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
    </section>
  );
}
