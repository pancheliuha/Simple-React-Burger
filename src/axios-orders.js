import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-145de.firebaseio.com/'
});

export default instance;