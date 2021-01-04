import axios from "axios"

const instance = axios.create({
    // The Api {cloud Function } URL
    baseURL: "http://localhost:5001/cloneamzon/us-central1/api" 
});

export default instance;