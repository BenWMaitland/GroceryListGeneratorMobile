import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import fonts from '../../../assets/theme/fonts';

export default StyleSheet.create({
  primary: {
    height: 50,
    width: 130,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.ui.primary,
    borderColor: colors.ui.primary,
    color: 'red',
  },

  alternate: {
    height: 50,
    width: 130,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.ui.white,
    borderColor: colors.ui.primary,
  },

  disabled: {
    height: 50,
    width: 130,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.ui.lightGrey,
    borderColor: colors.ui.darkGrey,
  },

  danger: {
    height: 50,
    width: 130,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.ui.white,
    borderColor: colors.ui.danger,
  },

  loader: {
    flexDirection: 'row',
  },

  primaryButtonText: {
    fontFamily: fonts.family.body,
    fontWeight: fonts.fontWeights.medium,
    fontSize: fonts.fontSizes.button,
    color: colors.text.white,
  },

  alternateButtonText: {
    fontFamily: fonts.family.body,
    fontWeight: fonts.fontWeights.medium,
    fontSize: fonts.fontSizes.button,
    color: colors.text.primary,
  },

  disabledButtonText: {
    fontFamily: fonts.family.body,
    fontWeight: fonts.fontWeights.medium,
    fontSize: fonts.fontSizes.button,
    color: colors.text.darkGrey,
    paddingLeft: 10,
  },

  dangerButtonText: {
    fontFamily: fonts.family.body,
    fontWeight: fonts.fontWeights.medium,
    fontSize: fonts.fontSizes.button,
    color: colors.text.error,
  },
});
