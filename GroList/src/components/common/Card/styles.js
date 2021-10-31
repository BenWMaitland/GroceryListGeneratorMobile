import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import fonts from '../../../assets/theme/fonts';

export default StyleSheet.create({
  cardContainer: {
    //borderWidth: 1,
    //borderColor: 'red',
    width: '100%',
    borderWidth: 1,
    marginVertical: 5,
    borderColor: colors.ui.lightGrey,
    borderRadius: 20,
    backgroundColor: colors.bg.primary,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
