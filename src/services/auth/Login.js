import axiosLogin from '../../instances/axios-login';

const login = data => axiosLogin.post('login', data);

export default login;
