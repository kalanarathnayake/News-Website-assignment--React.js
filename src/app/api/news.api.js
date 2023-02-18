import axios from 'axios';

const BASE_URL = process.env.REACT_APP_NEWS_API;

const requestConfigJson = {
  headers: {
    "x-auth-token": localStorage.getItem('x-auth-token'),
    'Content-type': 'application/json',
  },
};

export const NEWSAPI = {
  getNews: () => axios.get(`${BASE_URL}/api/news`),
  getNewsById: (newsId) => axios.get(`${BASE_URL}/api/news/${newsId}`),
  addNews: (newNews) => axios.post(`${BASE_URL}/api/news/`, newNews, requestConfigJson),
  updateNews: (newsId,updateNews) => axios.put(`${BASE_URL}/api/news/${newsId}`,updateNews,requestConfigJson),
  deleteNews: (newsId) => axios.delete(`${BASE_URL}/api/news/${newsId}`,requestConfigJson),
};