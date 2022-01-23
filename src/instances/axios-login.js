import axios from 'axios';
import {BASE_URL_LOGIN} from '../../enviroment';
import {showWarningMessage} from '../utils/alerts/showMessage';

const axiosLogin = axios.create({
  baseURL: BASE_URL_LOGIN,
});

axiosLogin.interceptors.response.use(responseInterceptor, errorInterceptor);

function errorInterceptor(error) {
  if (error.toString() === 'Error: Request failed with status code 400') {
    showWarningMessage('Email or password are incorrect');
  }
  return error;
}

async function responseInterceptor(response) {
  return response;
}

export default axiosLogin;
