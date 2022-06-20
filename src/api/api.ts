import axios from "axios";

const api = axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    baseURL: 'https://finance.ianbrito.com.br/api/v1/'
})

export default api;