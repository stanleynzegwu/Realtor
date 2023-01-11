import axios from 'axios';

let token = localStorage.getItem("user") && (JSON.parse(localStorage.getItem("user")).data.token)

const BASE_URL = "/api"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${token}`}
})