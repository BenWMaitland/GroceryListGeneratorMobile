import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/theme/fonts';

export default StyleSheet.create({
  logoImage: {
    height: 220,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },

  title: {
    paddingTop: 80,
    //fontFamily: fonts.family.heading,
    //fontSize: fonts.fontSizes.h3,
    //fontWeight: fonts.fontWeights.bold,
    textAlign: 'center',
    color: colors.ui.primary,
  },

  backEndError: {
    color: colors.ui.danger,
    //fontFamily: fonts.family.body,
    //fontSize: fonts.fontSizes.caption,
    //fontWeight: fonts.fontWeights.bold,
    backgroundColor: 'rgb(280, 230, 230)',
    textAlign: 'center',
    padding: 5,
  },

  form: {
    paddingTop: 30,
  },

  buttonWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  bodyText: {
    paddingTop: 20,
    paddingBottom: 20,
    //fontFamily: fonts.family.body,
    //fontSize: fonts.fontSizes.body,
    //fontWeight: fonts.fontWeights.regular,
    textAlign: 'center',
    color: colors.text.grey,
  },
  registerImage: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    //marginTop: 50,
  },
});
