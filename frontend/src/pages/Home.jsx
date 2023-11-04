import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Header from "../components/Header/Header";
import LastCourses from "../components/LastCourses/LastCourses";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div>
      <Header />
      <HamburgerMenu />
      <Main />
      <LastCourses />
    </div>
  );
}
