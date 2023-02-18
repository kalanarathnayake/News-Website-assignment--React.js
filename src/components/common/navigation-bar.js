import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin, logout } from "../../app/slices/auth.slice";
import logo from "../../assets/news_logo.png";

const navigation = [
  // { name: "Latest", href: "#" },
  // { name: "Sports", href: "#" },
  // { name: "Local News", href: "#" },
];

export default function NavigationBar(props) {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.admin);

  useEffect(() => {
    dispatch(getAdmin());
  }, []);
  return (
    <div className="px-5 pb-5">
      <nav className="" aria-label="Global">
        <div className="grid grid-cols-3 lg:mx-12 ">
          <div class="">

          </div>
          <div className="">
            <a href="/">
              <span className="sr-only">News</span>
              <img className="mx-28 w-28" src={logo} alt="News" />
            </a>
          </div>

          <div class="">
            {admin && (
              <div className="px-2 py-10 font-semibold text-right ">
                Hi, {admin.fullName}
                <span href="/admindashboard" class="ml-2 text-xs font-semibold inline-block py-1 px-2 hover:bg-blue-300 duration-300 rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                  <a href="/admindashboard" className="px-2 py-1" >Admin Dashboard</a>

                </span>
              </div>
            )}
          </div>
        </div>
        <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-500" />
        <div className="flex justify-between px-5 py-2">
          <div className="">
            <a
              href="/"
              className="flex text-lg font-bold leading-6 text-gray-900 hover:text-blue-800 hover:font-bold">
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </span>
              <span class="px-3">Home</span>
            </a>
          </div>
          <div className="flex justify-center gap-x-20">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-bold leading-6 text-gray-900 hover:text-blue-800 hover:duration-300 hover:font-bold"
              >
                {item.name}
              </a>
            ))}
          </div>

          {!admin && (
            <div className="">
              <a
                href="/signin"
                className="flex text-lg font-bold leading-6 text-gray-900 hover:text-blue-800 hover:font-bold">
                <span class="px-3">Sign In</span>
                <span aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                </span>
              </a>
            </div>
          )}
          {admin && (
            <div className="">
              <button
                onClick={() => { dispatch(logout()) }}
                className="flex text-lg font-bold leading-6 text-gray-900 hover:text-blue-800 hover:font-bold">
                <span class="px-3">Sign Out</span>
                <span aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
        <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-500" />
      </nav>
    </div>
  );
}
