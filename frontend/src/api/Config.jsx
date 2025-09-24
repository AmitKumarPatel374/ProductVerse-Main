import axios from 'axios';

const instance = axios.create({
    baseURL: "https://productverse-main.onrender.com/"
})

export default instance;
