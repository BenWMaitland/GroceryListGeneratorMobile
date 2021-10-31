import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Container from '../../components/common/Container';
import CustomButton from '../common/Buttons';
import Input from '../../components/common/Input';
import styles from './styles';
import {GlobalContext} from '../../context/Provider';
import colors from '../../assets/theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginComponent = ({...props}) => {
  const {navigate} = useNavigation();
  const {authState} = useContext(GlobalContext);
  //console.log(JSON.stringify(authState.error));

  return (
    <Container>
      <ScrollView style={{paddingHorizontal: 20}}>
        <Image
          height={100}
          width={100}
          source={require('../../assets/images/grolist.png')}
          resizeMode="contain"
          style={styles.logoImage}
        />
        <View>
          <Text style={styles.title}>GroList</Text>

          <View style={styles.form}>
            {authState.error && (
              <Text style={styles.backEndError}>{authState.error.error}</Text>
            )}
            <Input
              label="Email"
              placeholder="Email"
              keyboardType="email-address"
              icon="mail-outline"
              iconPosition="left"
              onChangeText={input => {
                props.onChange({inputName: 'email', value: input});
              }}
              error={props.errors.email}
            />
            <Input
              label="Password"
              placeholder="Password"
              keyboardType="default"
              icon="eye-outline"
              iconPosition="left"
              onChangeText={input => {
                props.onChange({inputName: 'password', value: input});
              }}
              error={props.errors.password}
            />
            {/* <Text style={styles.forgotPassword}>Forgot your Password?</Text> */}
            <View style={styles.buttonWrapper}>
              <CustomButton
                primary
                disabled={authState.loading}
                loading={authState.loading}
                title="LOG IN"
                onPress={props.onSubmit}
              />
            </View>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={styles.bodyText}>{'New User?\t'}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(REGISTER);
                }}>
                <Text style={[styles.bodyText, {color: colors.text.primary}]}>
                  {'Register'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default LoginComponent;
