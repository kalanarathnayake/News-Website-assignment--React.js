import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../app/slices/news.slice";

export default function ShowNews() {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const selectedNews = useSelector((state) => state.news.selectedNews);

  useEffect(() => {
    dispatch(getNewsById(newsId));
  }, [dispatch, newsId]);

  return (
    <div className="grid place-items-center ">
      {selectedNews && (
        <>
          {" "}
          <div class="text-4xl text-black font-bold font-serif px-5 w-fit m-5 hover:text-black">
          </div>
          <div className="grid object-cover grid-cols-2 gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="">
              <a href="/">
                <img
                  className="w-full h-full rounded-t-lg"
                  src={selectedNews.imageUrl}
                  alt=""
                />
              </a>
            </div>
            <div className="">
              <div className="px-5 py-5 text-left ">
                <a href="/">
                  <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {selectedNews.title}
                  </h5>
                </a>
                <p className="mt-10 mb-3 font-sans text-xl text-gray-700 dark:text-gray-400">
                  {selectedNews.body}
                </p>                
                <p className="mb-3 font-sans text-sm font-semibold text-gray-700 dark:text-gray-400">  
                <hr className="mt-10"/>
                <div class=" flex mt-2 justify-between">
                  <div class="">
                  {selectedNews.source}
                  </div>
                  <div class="">
                  {selectedNews.author}                 
                  </div>
                  <div class="">
                  {selectedNews.date} 
                  </div>
                </div>

                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
