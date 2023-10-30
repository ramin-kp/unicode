import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="max-w-[1920px] h-[177px] px-9 bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between my-[60px] ">
          <Link to="/">
            <img className="w-[106px]" src="/images/logo.png" alt="log-img" />
          </Link>
          <span className="inline-block w-px h-[58px] bg-gray-100 mr-2.5"></span>
          <ul className="flex items-center child:mx-2.5 child:text-lg child-hover:text-green-500 transition-all delay-75">
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/">دوره‌های آموزشی</Link>
            </li>
            <li>
              <Link to="/">پروژه‌ها</Link>
            </li>
            <li>
              <Link to="/">سفارشات</Link>
            </li>
            <li>
              <Link to="/">مقالات</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="جستجو" />
          <div>دارک</div>
          <div>پروفایل</div>
        </div>
      </div>
    </header>
  );
}
