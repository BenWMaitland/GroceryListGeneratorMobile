import React, {useContext} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/common/Container';
import Button from '../common/Buttons';
//import ThirdPartyButton from '../common/Buttons/ThirdParty';
import Input from '../../components/common/Input';
import styles from './styles';
import {GlobalContext} from '../../context/Provider';

const RegisterComponent = ({
  onSubmit,
  //onGoogleSubmit={onGoogleSubmit}
  onChange,
  form,
  errors,
}) => {
  const {authState} = useContext(GlobalContext);

  return (
    <Container>
      <ScrollView style={{paddingHorizontal: 20}}>
        <View>
          <Image
            height={100}
            width={100}
            source={require('../../assets/images/supermarket.jpeg')}
            resizeMode="contain"
            style={styles.registerImage}
          />
          <Text style={styles.title}>Welcome to GroList!</Text>
          <Text style={styles.bodyText}>
            Please register to access all the features of our community!
          </Text>

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
                onChange({inputName: 'email', value: input});
              }}
              error={errors.email}
            />
            <Input
              label="Password"
              placeholder="Password"
              keyboardType="default"
              icon="eye-outline"
              iconPosition="left"
              onChangeText={input => {
                onChange({inputName: 'password', value: input});
              }}
              error={errors.password}
            />

            <View style={styles.buttonWrapper}>
              <Button
                primary
                disabled={authState.loading}
                loading={authState.loading}
                title="REGISTER"
                onPress={onSubmit}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default RegisterComponent;
