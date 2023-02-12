import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const getPost = async (limit) => {
  const { data } = await api.get(`/post?limit=${limit || 10}`);
  return data;
};
