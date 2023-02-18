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
    <div className="max-w-full max-h-full">
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/signin"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign In <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="max-w-full max-h-full flex justify-center">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div>
            <form onSubmit={handleOnSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="flex justify-center">
                    <img src={logo} className="w-3/12" alt="Company Logo" />
                  </div>
                  <div>
                    <h2 className="mt-6 mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                      Sign up as a new user
                    </h2>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setfullName(e.target.value)}
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
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
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
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
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
