import AsyncStorage from '@react-native-community/async-storage';
import {GOOGLE_LOGOUT_USER} from '../../../constants/actionTypes';
import {GoogleSignin} from 'react-native-google-signin';

export default () => async dispatch => {
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();
  dispatch({
    type: GOOGLE_LOGOUT_USER,
  });
};
