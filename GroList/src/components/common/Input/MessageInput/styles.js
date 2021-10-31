import {StyleSheet} from 'react-native';
import colors from '../../../../assets/theme/colors';
import fonts from '../../../../assets/theme/fonts';

export default StyleSheet.create({
  inputContainer: {
    paddingTop: 0,
    width: '100%',
  },

  wrapper: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: colors.ui.white,
  },

  icon: {
    // borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: 'green',
  },

  textInput: {
    flex: 1,
    width: '100%',
    marginLeft: 10,
    padding: 5,
    color: colors.ui.darkGrey,
    fontFamily: fonts.family.body,
    fontSize: fonts.fontSizes.body,
    fontWeight: fonts.fontWeights.thin,
    // backgroundColor: 'red',
  },

  error: {
    paddingTop: 2,
    paddingLeft: 15,
    color: colors.ui.danger,
    fontFamily: fonts.family.body,
    fontSize: fonts.fontSizes.caption,
    fontWeight: fonts.fontWeights.thin,
  },
});
