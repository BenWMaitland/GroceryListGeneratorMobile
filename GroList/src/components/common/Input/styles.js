import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import fonts from '../../../assets/theme/fonts';

export default StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
  },

  label: {
    color: colors.ui.primary,
    //fontFamily: fonts.family.body,
    //fontSize: fonts.fontSizes.caption,
    //fontWeight: fonts.fontWeights.thin,
  },

  wrapper: {
    minHeight: 40,
    height: 'auto',
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    // backgroundColor: 'cyan',
  },

  textInput: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 5,
    color: colors.ui.darkGrey,
    // fontFamily: fonts.family.body,
    // fontSize: fonts.fontSizes.body,
    // fontWeight: fonts.fontWeights.thin,
    // backgroundColor: 'red',
  },

  error: {
    color: colors.ui.danger,
    paddingTop: 4,
    paddingLeft: 5,
    // fontFamily: fonts.family.body,
    // fontSize: fonts.fontSizes.caption,
    // fontWeight: fonts.fontWeights.thin,
  },
});
