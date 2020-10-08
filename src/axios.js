import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-adrianchi/us-central1/api', // the API cloud func url

})

export default instance;