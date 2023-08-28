import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

export const fetchData = async (url, config = {}) => {
  const response = await axios.get(url, config);
  return response.data;
};
export const fetchDataById = async (url, config = {}) => {
  const response = await axios.get(url, config);
  return response.data;
};
export const insertData = async (url, data, config = {}) => {
  const response = await axios.post(url, data, config);
  return response.data;
};
export const updateData = async (url, data, config = {}) => {
  const response = await axios.patch(url, data, config);
  return response.data;
};
export const deleteData = async (url, config = {}) => {
  const response = await axios.delete(url, config);
  return response.data;
};
