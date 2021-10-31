import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  safeAreaViewInAppScreens: {
    flex: 1,
    backgroundColor: colors.ui.primary,
    marginBottom: 80,
    // borderWidth: 5,
    // borderColor: 'green',
  },

  safeAreaViewAuthScreen: {
    flex: 1,
    backgroundColor: colors.ui.white,
    padding: 20,
    // borderWidth: 5,
    // borderColor: 'green',
  },

  scrollView: {
    backgroundColor: colors.ui.white,
    // borderWidth: 5,
    // borderColor: 'red',
  },

  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.bg.white,
    //backgroundColor: 'tomato',
    //borderWidth: 3,
    //borderColor: 'red',
  },
});
