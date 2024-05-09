import axios from "axios";

const Request = axios.create({
  baseURL: process.env.EXPO_PUBLIC_WHITELABEL_API_URL,
  timeout: 5000,
});

export default Request;
