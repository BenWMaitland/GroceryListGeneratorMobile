import axiosInstance from '../../../helpers/axiosInterceptor';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({email, password}) =>
  async dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('login', {
        email: email,
        password: password,
      })
      .then(async res => {
        await AsyncStorage.setItem('token', res.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };
