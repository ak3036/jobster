import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://www.redux-toolkit-jobster-api-server.onrender.com/api/v1',
});

export default customFetch;
