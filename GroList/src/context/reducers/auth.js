import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGOUT_USER,
  UPDATE_IMAGE,
  UPDATE_GLOBAL_STATE,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
        data: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isRegister: true,
        isLoggedIn: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        data: null,
        error: null,
        loading: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    case UPDATE_GLOBAL_STATE:
      return {
        loading: false,
        data: payload,
        error: null,
        isLoggedIn: true,
      };

    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case GOOGLE_LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
        error: null,
      };

    case UPDATE_IMAGE:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default auth;