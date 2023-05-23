import axios from "axios";

const api = axios.create({
  baseURL: "https://api.prod.aprincipalbb.com.br/api/v2",
});

export { api };
