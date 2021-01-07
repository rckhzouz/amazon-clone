import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-2895a.cloudfunctions.net/api'
    // http://localhost:5001/clone-2895a/us-central1/api
});

export default instance;