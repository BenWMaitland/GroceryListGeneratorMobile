import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
