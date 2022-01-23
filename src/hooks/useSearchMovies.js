import {useState} from 'react';
import searchMovies from '../services/movies/SearchMovies';
import {showSuccessMessage} from '../utils/alerts/showMessage';

const useSearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSearchMovies = query => {
    setLoading(true);
    searchMovies(query)
      .then(response => {
        setMovies(response.data.results);
        showSuccessMessage('Search Successful');
      })
      .finally(() => setLoading(false));
  };

  return {
    getSearchMovies,
    movies,
    loading,
  };
};

export default useSearchMovies;
