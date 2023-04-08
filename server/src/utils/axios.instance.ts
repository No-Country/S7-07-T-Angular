import axios from "axios";

interface Headers {
  authorization: string;
  accept: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.spoonacular.com/food/products/",
  headers: {
    "x-api-key": process.env.SPOONACULAR_API_KEY,
  },
});

export default axiosInstance;
