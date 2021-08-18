import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://random-data-api.com/api/',
});