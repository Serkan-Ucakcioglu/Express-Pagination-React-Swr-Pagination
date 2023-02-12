import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const getPost = async () => {
  const { data } = await api.get("/post");
  return data;
};
