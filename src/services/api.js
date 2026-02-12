import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // sua URL
});

// Isso adiciona o token em toda chamada da API automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@NotePlus:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;