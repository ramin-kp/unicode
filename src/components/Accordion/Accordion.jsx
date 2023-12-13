import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useParams } from "react-router-dom";
import SvgIcons from "../assets/icons/SvgIcons";

export default function Example(props) {
  const { courseName} = useParams();
  return (
    <div className="pb-1.5">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex  items-center justify-between rounded-lg w-full  bg-gray-200 dark:bg-black-200 px-4 py-5 text-left text-sm font-medium text-purple-900 hover:bg-gray-300 dark:hover:bg-black-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 ${
                open ? "rounded-b-none hover:bg-gray-200 dark:bg-black-200" : ""
              }`}
            >
              <span className="font-danaMedium text-zinc-700 dark:text-white text-xl text-right line-clamp-2">
                جلسات دوره
              </span>
              <ChevronDownIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } shrink-0 h-7 w-7 text-zinc-700 dark:text-white`}
              />
            </Disclosure.Button>
            {props.accordionData.length ? (
              props.accordionData.map((item, index) => (
                <Disclosure.Panel
                  key={item._id}
                  className="flex items-center justify-between px-4 py-5 bg-gray-100
              dark:bg-black-300 text-zinc-700 dark:text-white text-lg border-b border-gray-200 dark:border-slate-700"
                >
                  {item.free === 1 || props.userRegister ? (
                    <div className="flex flex-col gap-2.5 w-full group ">
                      <Link
                        className="flex items-center gap-2.5 group-hover:text-green-500 transition-all"
                        to={`/${courseName}/${item._id}`}
                      >
                        <div className="flex items-center justify-center shrink-0 w-7 h-7 bg-white dark:bg-black-500 font-danaBold text-lg text-zinc-700 dark:text-white rounded-md group-hover:bg-green-400 group-hover:text-white transition-all">
                          {index + 1}
                        </div>
                        <p>{item.title}</p>
                      </Link>
                      <div className="flex items-center justify-between ">
                        <span
                          className="px-2.5 py-1 bg-gray-200 dark:bg-black-100 text-xs font-danaLight text-zinc-700 dark:text-white rounded-md group-hover:bg-green-100
                    dark:group-hover:bg-green-500/20 group-hover:text-green-500 transition-all"
                        >
                          جلسه رایگان
                        </span>
                        <div className="flex items-start gap-1.5">
                          {item.time}
                          <svg className="w-6 h-6 group-hover:text-green-500 transition-all">
                            <use href="#play-outline"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2.5 w-full group ">
                      <span className="flex items-center gap-2.5 group-hover:text-green-500 transition-all cursor-context-menu">
                        <div className="flex items-center justify-center shrink-0 w-7 h-7 bg-white dark:bg-black-500 font-danaBold text-lg text-zinc-700 dark:text-white rounded-md group-hover:bg-green-400 group-hover:text-white transition-all">
                          {index + 1}
                        </div>
                        <p>{item.title}</p>
                      </span>
                      <div className="flex items-center justify-between ">
                        <span
                          className="px-2.5 py-1 bg-gray-200 dark:bg-black-100 text-xs font-danaLight text-zinc-700 dark:text-white rounded-md group-hover:bg-green-100
                    dark:group-hover:bg-green-500/20 group-hover:text-green-500 transition-all"
                        >
                          جلسه نقدی
                        </span>
                        <div className="flex items-start gap-1.5">
                          {item.time}
                          <svg className="w-6 h-6 group-hover:text-green-500 transition-all">
                            <use href="#lock"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </Disclosure.Panel>
              ))
            ) : (
              <Disclosure.Panel
                className="flex items-center justify-between px-4 py-5 bg-gray-100
              dark:bg-black-300 text-zinc-700 dark:text-white text-lg border-b border-gray-200 dark:border-slate-700"
              >
                <div className="flex flex-col gap-2.5 w-full group ">
                  <span
                    className="flex items-center gap-2.5"
                    to="/:courseName/:sessionID"
                  >
                    <p>فعلا ویدیو ای برای این دوره قرار نگرفته است!</p>
                  </span>
                </div>
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>
      <SvgIcons />
    </div>
  );
}
