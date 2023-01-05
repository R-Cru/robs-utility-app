import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/R-Cru/robs-utility-app",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getJokeById(id) {
    return apiClient.get("/jokes/" + id);
  },
};
