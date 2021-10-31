import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';
import {LOGIN_SUCCESS} from '../constants/actionTypes';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
    authDispatch,
  } = useContext(GlobalContext);
  const [authLoaded, setAuthLoaded] = useState(false);

  // const getUser = async () => {
  //   // await AsyncStorage.clear();
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     const user = await AsyncStorage.getItem('user');
  //     if (user) {
  //       authDispatch({
  //         type: LOGIN_SUCCESS,
  //         payload: {token: token, user: JSON.parse(user)},
  //       });
  //       setAuthLoaded(true);
  //     } else {
  //       setAuthLoaded(true);
  //     }
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getUser();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoggedIn]);

  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <DrawerNavigator /> : */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
