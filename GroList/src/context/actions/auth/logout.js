import AsyncStorage from '@react-native-community/async-storage';
import {NavigationActions, StackActions} from 'react-navigation';
import {LOGOUT_USER} from '../../../constants/actionTypes';
import {LOGIN} from '../../../constants/routeNames';

export default () => async dispatch => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');

  dispatch({
    type: LOGOUT_USER,
  });

  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: LOGIN})],
  });
};
