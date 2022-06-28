import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.3.26/php/appcode/'
});

export default api;
