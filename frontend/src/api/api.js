import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const getPost = async (limit, page) => {
  const { data } = await api.get(
    `/post?limit=${limit || 10}&page=${page || 1}`
  );
  return data;
};
