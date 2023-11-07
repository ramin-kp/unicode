import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Category from "./pages/Category";
import NotFound from "./components/NotFound/NotFound";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/category/:courseName", element: <Category /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
