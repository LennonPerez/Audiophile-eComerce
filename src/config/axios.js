import axios from "axios";

const AxiosClient = axios.create({
  // baseURL: "http://localhost:4000/",
  baseURL: "https://mocki.io/v1/4f2ce7f7-f829-4a9c-845d-f4367320247c",
});

export default AxiosClient;
