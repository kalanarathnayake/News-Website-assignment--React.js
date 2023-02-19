import React, { useState } from "react";
import logo from "../assets/news_logo.png";
import { useDispatch } from "react-redux";
import { register } from "../app/slices/auth.slice";

function SignUpPage() {
  const dispatch = useDispatch();

  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const admin = {
      fullName,
      email,
      password,
    };
    dispatch(register(admin));
  };

  return (
    <div className="px-6 pt-20 lg:px-8">
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/signin"
              className="text-lg font-bold leading-6 text-gray-900"
            >
              Sign In <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="flex items-center justify-center h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="">
          <form onSubmit={handleOnSubmit} className="mt-8 space-y-6">
              <div className="w-full max-w-md p-10 bg-white border-2 border-solid rounded-lg shadow-md border-grey-500">
                <div className="flex justify-center">
                  <img src={logo} className="w-6/12" alt="Company Logo" />
                </div>
                <div>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
                    Sign up as a new user
                  </h2>
                </div>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div className="space-y-5">
                    <label
                      htmlFor="first-name"
                      className="sr-only">
                      First name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setfullName(e.target.value)}
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="First name"
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="space-y-5">
                    <label
                      htmlFor="email-address"
                      className="sr-only"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email-address"
                      id="email-address"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      autoComplete="email"
                      className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                      />
                  </div>
                  <div className="space-y-5">
                    <label
                      htmlFor="email-address"
                      className="sr-only"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="py-5">
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md group hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Save
                </button>
              </div>
              </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
