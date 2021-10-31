import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/theme/fonts';

export default StyleSheet.create({
  logoImage: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginTop: 50,
  },

  title: {
    color: colors.ui.primary,
    //fontFamily: fonts.family.heading,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
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

  forgotPassword: {
    padding: 5,
    color: colors.text.primary,
    //fontFamily: fonts.family.body,
    //fontWeight: fonts.fontWeights.thin,
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
  google: {
    height: 50,
    width: '100%',
    marginVertical: 5,
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: '#FBBC05',
    // borderColor: '#FBBC05',
  },
});
