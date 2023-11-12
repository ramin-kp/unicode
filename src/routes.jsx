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

const routes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/course-cat/:categoryName", element: <Category /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/course/:courseName", element: <Course /> },
  { path: "/blog/:blogName", element: <Blog /> },
  { path: "/lesson/:lessonName", element: <Lesson /> },
  { path: "/orders", element: <Orders /> },
  { path: "/login/*", element: <Login /> },
  { path: "/login/email", element: <LoginByEmail /> },
  { path: "/signup", element: <Register /> },
  { path: "/*", element: <NotFound /> },
];
export default routes;
