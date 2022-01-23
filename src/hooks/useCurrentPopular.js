import {useState} from 'react';
import currentPopular from '../services/movies/CurrentPopular';

const useCurrentPopular = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCurrentPopular = () => {
    setLoading(true);
    currentPopular()
      .then(response => {
        setMovies(response.data.results);
      })
      .finally(() => setLoading(false));
  };

  return {
    getCurrentPopular,
    movies,
    loading,
  };
};

export default useCurrentPopular;
