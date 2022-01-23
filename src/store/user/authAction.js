export const AUTH_SUCCESS = 'AUTH_SUCCESS';

export const authSuccess = userInfo => ({
  type: AUTH_SUCCESS,
  payload: userInfo,
});
