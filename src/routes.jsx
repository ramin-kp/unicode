import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Category from "./pages/Category";
import Blogs from "./pages/Blogs";
import Course from "./pages/Course";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/course-cat/:categoryName", element: <Category /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/course/:courseName", element: <Course /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
