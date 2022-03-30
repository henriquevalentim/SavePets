import axios from 'axios';

export const Request = axios.create({
  baseURL: 'http://192.168.0.2:8080/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
