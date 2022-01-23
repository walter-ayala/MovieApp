import axios from 'axios';
import {BASE_URL_MOVIES} from '../../enviroment';
import {showWarningMessage} from '../utils/alerts/showMessage';

const axiosMovies = axios.create({
  baseURL: BASE_URL_MOVIES,
});

axiosMovies.interceptors.response.use(responseInterceptor, errorInterceptor);

function errorInterceptor(error) {
  showWarningMessage(error);
  return error;
}

async function responseInterceptor(response) {
  return response;
}

export default axiosMovies;
