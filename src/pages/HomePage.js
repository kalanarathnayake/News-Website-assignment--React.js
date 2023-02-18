import {
  FooterBar,
  HotNewsTile,
  NavigationBar,
  NewsCard,
  NewsTile,
} from "../components/index.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNews } from "../app/slices/news.slice";

const newsType = {
  SPORTS: "SPORTS",
  LOCAL: "LOCAL",
  FEATURED: "FEATURED",
  HOTNEWS: "HOTNEWS",
};

export default function HomePage() {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const filterPapers = (news, newsType) => {
    return news.filter(function (el) {
      return el.category === newsType;
    });
  };

  return (
    <div className="bg-white isolate">
      <NavigationBar />
      <div className="divide-y-4 divide-slate-400/25" />
      <main className="px-5">
        {/* Home Page Content Start */}
        <div class="text-4xl text-red-600 font-bold font-serif px-5 w-fit border-l-4 my-5 border-l-red-700 hover:text-black">
          Hot News
        </div>
        <div>
          <HotNewsTile />
        </div>
        <div class="text-4xl text-red-600 font-bold font-serif px-5 w-fit border-l-4 my-5 border-l-red-700   hover:text-black">
          Featured
        </div>
        <div className="grid grid-cols-4 gap-2">
          {news &&
            filterPapers(news, newsType.FEATURED).map((item) => {
              return (
                <div className="col-span-1" key={item._id}>
                  <NewsCard
                    key={item._id}
                    newsId={item._id}
                    title={item.title}
                    description={item.body}
                    src={item.imageUrl}
                  />
                </div>
              );
            })}
        </div>
        <div class="text-4xl text-red-600 font-bold font-serif px-5 w-fit border-l-4 border-l-red-700  mt-8 hover:text-black">
          Local News
        </div>
        <div className="grid grid-cols-3 gap-4 pb-5 my-5 ">
          {news &&
            filterPapers(news, newsType.LOCAL).map((item) => {
              return (
                <NewsTile
                key={item._id}
                newsId={item._id}
                  title={item.title}
                  description={item.body}
                  src={item.imageUrl}
                />
              );
            })}
        </div>
        <div class="text-4xl text-red-600 font-bold font-serif px-5  w-fit border-l-4 border-l-red-700  mt-8 hover:text-black">
          Sports
        </div>
        <div className="grid grid-cols-3 gap-4 my-5">
          {news &&
            filterPapers(news, newsType.SPORTS).map((item) => {
              return (
                <NewsTile
                  key={item._id}
                  newsId={item._id}
                  title={item.title}
                  description={item.body}
                  src={item.imageUrl}
                />
              );
            })}
        </div>
        {/* Home Page Content End */}
      </main>
      <FooterBar />
    </div>
  );
}
