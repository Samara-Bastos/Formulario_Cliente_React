import axios from "axios";

const setupAxios = axios.create({
    baseURL: "http://localhost:8080",
})

export default setupAxios;