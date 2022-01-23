import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import login from '../services/auth/Login';
import {authSuccess} from '../store/user/authAction';

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const {token, isAuthenticated} = user;

  const [loading, setLoading] = useState(false);

  const signIn = data => {
    setLoading(true);
    login(data)
      .then(response => {
        dispatch(authSuccess(response.data));
      })
      .finally(() => setLoading(false));
  };

  return {
    token,
    isAuthenticated,
    signIn,
    loading,
  };
};

export default useUser;
