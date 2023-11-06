import NotFound from "./components/NotFound/NotFound";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
// import routes from "./routes";
import { Navigate, Route, Router, Routes} from "react-router-dom";

function App() {
  // const router = useRoutes(routes);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/notfound" />} />
      </Routes>
    </>
  );
}

export default App;
