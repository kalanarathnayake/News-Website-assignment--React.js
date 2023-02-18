import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/slices/auth.slice";
import logo from "../assets/news_logo.png";

function SignInPage() {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };
    dispatch(login(userCredentials));
  };
  return (
    <div>
      <div className="px-6 pt-20 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/"
              className="text-lg font-bold leading-6 text-gray-900">
              Home <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="flex items-center justify-center h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-10 bg-white border-2 border-solid rounded-lg shadow-md border-grey-500">
          <div className="flex justify-center">
            <img src={logo} className="w-6/12" alt="Company" />
          </div>
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleOnSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="space-y-5">
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="space-y-5">
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md group hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-serif"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
