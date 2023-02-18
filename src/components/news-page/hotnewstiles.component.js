import React, { useState } from "react";
import news02 from "../../assets/news/news_02.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const newsType = {
  SPORTS: "SPORTS",
  LOCAL: "LOCAL",
  FEATURED: "FEATURED",
  HOTNEWS: "HOTNEWS",
};

export default function HotNewsTile(props) {
  const news = useSelector((state) => state.news.news);

  const filterPapers = (news, newsType) => {
    return news.filter(function (el) {
      return el.category === newsType;
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-1">
        {news && (
          <div class="relative">
            <Link
              to={{
                pathname: `/viewnews/${news[0]?._id}`,
              }}>
              <a href="" target="_blank" rel="noreferrer">
                <img className="w-full h-full rounded-md " src={news[0]?.imageUrl} />
              </a>
              <div class="rounded-md  bg-red-8 absolute bottom-0 left-0 right-0 px-4 content-center bg-gradient-to-b from-transparent to-black/70">
                <h3 class="  text-3xl mb-2 text-white font-bold font-serif">
                  {news[0]?.title}
                </h3>
                <p class="mb-5 text-sm text-gray-300">{news[0]?.body.slice(0, 200)}</p>
              </div>
            </Link>
          </div>
        )}
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          {news &&
            filterPapers(news, newsType.HOTNEWS).map((item) => {
              return (
                <div class=" relative" KEY={item._id}>
                  <Link
                    to={{
                      pathname: `/viewnews/${item._id}`,
                    }}>
                    <img className="w-full h-full rounded-md " src={item.imageUrl} />
                    <div class="rounded-md  absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-b from-transparent to-black/70">
                      <h3 class="text-md text-white font-bold font-serif">
                        {item.title}
                      </h3>
                      {/* <p class="mt-2 text-sm text-gray-300">
                        {item.body.slice(0, 100)}...
                      </p> */}
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
