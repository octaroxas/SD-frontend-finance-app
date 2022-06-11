import axios from "axios";

const api = axios.create({
    baseURL: 'https://finance.ianbrito.com.br/api/v1/'
})

export default api;