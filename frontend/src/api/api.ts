import axios from "axios";

//api
export const api = axios.create({
  baseURL: "http://localhost:3001/",
});

//get post
export const getPost = async (limit: number, page: number) => {
  const { data } = await api.get(
    `/post?limit=${limit || 10}&page=${page || 1}`
  );
  return data;
};
