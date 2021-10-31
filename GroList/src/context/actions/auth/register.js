import axiosInstance from '../../../helpers/axiosInterceptor';
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionTypes';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({email, password}) =>
  async dispatch => {
    dispatch({
      type: REGISTER_LOADING,
    });
    // console.log('dispatch work');
    axiosInstance
      .post('register', {
        email,
        password,
      })
      .then(res => {
        //console.log(res.data);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        console.log('finish register');
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'fail to register'},
        });
      });
  };
