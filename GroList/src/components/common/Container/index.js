import React, {useContext} from 'react';
import {View, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
import {GlobalContext} from '../../../context/Provider';

const Container = ({children}) => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: 'white'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default Container;
