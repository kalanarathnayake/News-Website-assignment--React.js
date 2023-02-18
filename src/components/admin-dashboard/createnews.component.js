import React from "react";
import { Link } from "react-router-dom";

export default function CreateNews(props) {
    return <div class="grid grid-cols-1 w-full">
        <div class="flex  font-serif text-justify  justify-between  col-span-1  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="">
                <input type="search" id="default-search" class=" justify-center block w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search News" required />
            </div>
            <div class="">
                <Link to="/create-news" class="content-center my-1 w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4: focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Create News
                </Link>
            </div>
        </div>
    </div>
}
