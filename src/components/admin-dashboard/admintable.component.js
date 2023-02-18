import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from 'date-fns'
import { deleteNews, getNews } from "../../app/slices/news.slice";

export default function BannerTile(props) {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
      </div>
      <div className="px-0 pt-0 pb-2 lex-auto">
        <div className="p-0 overflow-x-auto">
          <table className="w-full mb-0 align-top border-gray-200 items-left text-slate-500">
            <thead className="align-bottom ">
              <tr >
                <th scope="col" className="justify-start px-0 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"> News Title </th>
                {/* <th scope="col" className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"> Article Text</th> */}
                <th scope="col" className="px-0 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Author</th>
                <th scope="col" className="px-0 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Created Date</th>
                <th scope="col" className="px-0 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Source</th>
                <th scope="col" className="px-0 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Category</th>
                <th scope="col" className="px-0 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Location</th>
                <th scope="col" className="px-0 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Actions</th>
              </tr>
            </thead>
            <tbody>
              {news && news.map((item) => {
                return (
                  <tr className="" key={item._id}>
                    <th scope="row" className="justify-start font-medium text-left text-gray-900 whitespace-nowrap dark:text-white"> {item.title} </th>
                    {/* <td className="">{item.body}</td> */}
                    <td className="">{item.author}</td>
                    <td className="">{item.date}</td>
                    <td className="">{item.source}</td>
                    <td className="">{item.category}</td>
                    <td className="">{item.location}</td>
                    <td className="flex gap-2 mt-1">
                      <button
                        onClick={() => { dispatch(deleteNews(item._id)); }}
                        className="px-1 py-1 font-mono text-sm leading-6 text-gray-900 bg-red-400 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                      </button>
                      <Link
                        to={{ pathname: `/edit-news/${item._id}`, }} className="px-1 py-1 font-mono text-sm leading-6 text-gray-900 bg-blue-400 rounded-lg bg-red-">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>

                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
