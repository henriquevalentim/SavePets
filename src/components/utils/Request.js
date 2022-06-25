import axios from 'axios';

export const Request = axios.create({
  baseURL: 'http://64.227.71.102:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
