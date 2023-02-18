import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FooterBar, NavigationBar } from "../components/index.component";
import EditNewsForm from "../components/news-submission/edit-news-form.component";
import { useParams } from "react-router-dom";
import { getNewsById } from "../app/slices/news.slice";

export default function EditNews() {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const selectedNews = useSelector((state) => state.news.selectedNews);

  useEffect(() => {
    console.log(newsId);
    dispatch(getNewsById(newsId));
  }, [dispatch, newsId]);

  return (
    <div>
      <NavigationBar />
      {selectedNews && <EditNewsForm news={selectedNews} />}
      <FooterBar />
    </div>
  );
}
