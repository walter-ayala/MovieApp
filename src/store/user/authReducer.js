import {AUTH_SUCCESS} from './authAction';

const INITIAL_STATE = {
  isAuthenticated: false,
  token: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return authSuccess(action);
    default:
      return state;
  }
};

const authSuccess = ({payload}) => {
  return {
    isAuthenticated: true,
    token: payload.token,
  };
};

export default authReducer;
