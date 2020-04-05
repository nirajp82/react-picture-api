import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID jBJO0Oqzw74FZT9Fcody6X5S5Tpf-YNSQWGX70p0md8"
    }
});

export default axiosInstance;