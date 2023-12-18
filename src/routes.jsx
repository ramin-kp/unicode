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
import AdminBlogs from "./pages/AdminPanel/AdminBlogs";
import AdminOffs from "./pages/AdminPanel/AdminOffs";
import AdminUsers from "./pages/AdminPanel/AdminUsers";
import AdminContactUs from "./pages/AdminPanel/AdminContactUs";
import AdminSession from "./pages/AdminPanel/AdminSession";
import AdminComments from "./pages/AdminPanel/AdminComments";
import AdminDraft from "./pages/AdminPanel/AdminDraft";
import UserPanel from "./pages/UserPanel/UserPanel";
import UPanelIndex from "./pages/UserPanel/UPanelIndex";
import UPanelOrder from "./pages/UserPanel/UPanelOrder";
import UPanelOrders from "./pages/UserPanel/UPanelOrders";
import UPanelCourses from "./pages/UserPanel/UPanelCourses";
import UPanelTickets from "./pages/UserPanel/UPanelTickets";
import UPanelViewTicket from "./pages/UserPanel/UPanelViewTicket";
import UPanelNewTicket from "./pages/UserPanel/UPanelNewTicket";
import UPanelUserInfo from "./pages/UserPanel/UPanelUserInfo";
import PAdminRoute from "./components/PAdminRoute/PAdminRoute";
import AdminTickets from "./pages/AdminPanel/AdminTickets";
import AdminDiscounts from "./pages/AdminPanel/AdminDiscounts";

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
    element: (
      <PAdminRoute>
        <AdminPanel />
      </PAdminRoute>
    ),
    children: [
      { path: "", element: <AdminMain /> },
      { path: "menus", element: <AdminMenus /> },
      { path: "category", element: <AdminCategory /> },
      { path: "courses", element: <AdminCourses /> },
      { path: "session", element: <AdminSession /> },
      { path: "blogs", element: <AdminBlogs /> },
      { path: "blogs/draft/:shortName", element: <AdminDraft /> },
      { path: "users", element: <AdminUsers /> },
      { path: "comments", element: <AdminComments /> },
      { path: "tickets", element: <AdminTickets /> },
      { path: "contact-us", element: <AdminContactUs /> },
      { path: "offs", element: <AdminOffs /> },
      { path: "discounts", element: <AdminDiscounts /> },
    ],
  },
  {
    path: "/my-account/*",
    element: <UserPanel />,
    children: [
      { path: "", element: <UPanelIndex /> },
      { path: "orders", element: <UPanelOrders /> },
      { path: "orders/:id", element: <UPanelOrder /> },
      { path: "courses", element: <UPanelCourses /> },
      { path: "tickets", element: <UPanelTickets /> },
      { path: "view-ticket/:id", element: <UPanelViewTicket /> },
      { path: "tickets/new-ticket", element: <UPanelNewTicket /> },
      { path: "edit-account", element: <UPanelUserInfo /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
];
export default routes;
