import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL ? process.env.API_URL : "https://dummyjson.com/", 
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAllProducts = () => {
    return api.get("/products/");
}

export { getAllProducts };
export default api;
