import NotFound from "./components/NotFound/NotFound";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/courses", element: <Courses /> },
  { path: "/*", element: <NotFound /> },
];
export default routes;
