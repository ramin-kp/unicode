import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Category from "./pages/Category";
import Blogs from "./pages/Blogs";
import NotFound from "./components/NotFound/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/course-cat/:courseName", element: <Category /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
