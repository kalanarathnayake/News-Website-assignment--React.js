import axios from 'axios';

const BASE_URL = process.env.REACT_APP_NEWS_API;

const requestConfigJson = {
  headers: {
    "x-auth-token": localStorage.getItem('x-auth-token'),
    'Content-type': 'application/json',
  },
};

export const AUTHAPI = {
  getAdmin: () => axios.get(`${BASE_URL}/api/admin`,requestConfigJson),
  register: (admin) => axios.post(`${BASE_URL}/api/admin/register`, admin),
  login: (userCredentials) => axios.post(`${BASE_URL}/api/admin/login`, userCredentials),
};