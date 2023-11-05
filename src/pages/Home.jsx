import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import Header from "../components/Header/Header";
import LastArticles from "../components/LastArticles/LastArticles";
import LastCourses from "../components/LastCourses/LastCourses";
import Main from "../components/Main/Main";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <HamburgerMenu />
      <Main />
      <LastCourses />
      <Services />
      <LastArticles />
    </div>
  );
}
