import axios from 'axios';

const api = axios.create({
  baseURL: 'noteplusbackend-production.up.railway.app', // sua URL
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