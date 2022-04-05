import axios from 'axios';

export const Request = axios.create({
  baseURL: 'http://164.92.148.240:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
