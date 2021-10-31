//import 'intl';
//import 'intl/locale-data/jsonp/en';
//import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigation';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
