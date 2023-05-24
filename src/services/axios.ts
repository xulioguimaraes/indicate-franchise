import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:10101/v2",
  // baseURL: "https://api.prod.aprincipalbb.com.br/api/v2",
});

export { api };
