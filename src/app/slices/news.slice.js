import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NEWSAPI } from "../api/news.api";

export const getNews = createAsyncThunk("news/getNews", async () => {
  const response = await NEWSAPI.getNews();
  return response.data;
});

export const addNews = createAsyncThunk("news/addNews", async (newNews) => {
  const response = await NEWSAPI.addNews(newNews);
  return response.data;
});

export const updateNews = createAsyncThunk(
  "news/updateNews",
  async (updatedNews) => {
    const response = await NEWSAPI.updateNews(updatedNews.id, updatedNews);
    return response.data;
  }
);

export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (newsId) => {
    const response = await NEWSAPI.deleteNews(newsId);
    return response.data;
  }
);

const getNewsByIdFunc = (newsList, newsId) => {
  const result = newsList.filter(function (el) {
    return el._id === newsId;
  });
  return result ? result[0] : null; // or undefined
};

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    selectedNews: null,
    status: "success",
  },
  reducers: {
    getNewsById: (state, action) => {
      state.selectedNews = getNewsByIdFunc(state.news, action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
      state.status = "success";
    });
    builder.addCase(addNews.fulfilled, (state, action) => {
      state.news = [state.news, action.payload];
      state.status = "success";
      window.location.href = "/admindashboard";
    });
    builder.addCase(updateNews.fulfilled, (state, action) => {
      state.news = state.news.map((x) =>
        x._id === action.payload._id ? action.payload : x
      );
      state.status = "success";
      window.location.href = "/admindashboard";
    });
    builder.addCase(deleteNews.fulfilled, (state, action) => {
      state.news = state.news.filter((x) => x._id !== action.payload._id);
      state.status = "success";
    });
  },
});

export const { getNewsById } = newsSlice.actions;

export default newsSlice.reducer;
