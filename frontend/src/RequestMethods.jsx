import axios from 'axios';

//later i will get the token when the user logs in not this static
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM1ZjgzODUzNWU4NjRiNmI2ODczYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjAwNjY3MywiZXhwIjoxNjcyODcwNjczfQ.WzDfyZFLyPSuC3aZlgWRDt3yOl1ZJg5qGnpf0DYeI2w'
const BASE_URL = "/api"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${token}`}
})