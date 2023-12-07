import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Category from "./pages/Category";
import Blogs from "./pages/Blogs";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import Lesson from "./pages/Lesson";
import Login from "./pages/Login";
import LoginByEmail from "./pages/LoginByEmail";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Rules from "./pages/Rules";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import AdminMenus from "./pages/AdminPanel/AdminMenus";
import AdminCategory from "./pages/AdminPanel/AdminCategory";
import AdminCourses from "./pages/AdminPanel/AdminCourses";
import AdminMain from "./pages/AdminPanel/AdminMain";
import AdminBlogs from './pages/AdminPanel/AdminBlogs';
import AdminOffs from './pages/AdminPanel/AdminOffs';
import AdminUsers from './pages/AdminPanel/AdminUsers';
const routes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/articles", element: <Blogs /> },
  { path: "/course-info/:courseName", element: <Course /> },
  { path: "/article-info/:articleName", element: <Blog /> },
  { path: "/:courseName/:sessionID", element: <Lesson /> },
  { path: "/orders", element: <Orders /> },
  { path: "/search/:value", element: <Search /> },
  // { path: "/login", element: <Login /> },
  { path: "/login", element: <LoginByEmail /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <Contact /> },
  { path: "/terms-rules", element: <Rules /> },
  {
    path: "/p-admin/*",
    element: <AdminPanel />,
    children: [
      { path: "", element: <AdminMain /> },
      { path: "menus", element: <AdminMenus /> },
      { path: "category", element: <AdminCategory /> },
      { path: "courses", element: <AdminCourses /> },
      { path: "blogs", element: <AdminBlogs /> },
      { path: "users", element: <AdminUsers /> },
      { path: "offs", element: <AdminOffs /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
];
export default routes;
