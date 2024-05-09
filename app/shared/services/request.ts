import axios from "axios";
import Env from "../config/env";

const Request = axios.create({
  baseURL: Env.EXPO_PUBLIC_API_URL,
  timeout: 5000,
});

export default Request;
