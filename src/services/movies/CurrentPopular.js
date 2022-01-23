import {API_KEY} from '../../../enviroment';
import axiosMovies from '../../instances/axios-movies';

const currentPopular = () => axiosMovies.get(`movie/popular?api_key=${API_KEY}`);

export default currentPopular;
