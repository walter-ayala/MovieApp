import {API_KEY} from '../../../enviroment';
import axiosMovies from '../../instances/axios-movies';

const searchMovies = query => axiosMovies.get(`search/movie?api_key=${API_KEY}&query=${query}`);

export default searchMovies;
