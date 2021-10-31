import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
//import Ionicon from 'react-native-vector-icons/Ionicons';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Input = ({...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (props.icon && props.iconPosition) {
      if (props.iconPosition === 'left') {
        return 'row';
      } else if (props.iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (focused) {
      return colors.ui.primary;
    }
    if (props.error) {
      return colors.ui.danger;
    } else {
      return colors.ui.lightGrey;
    }
  };

  return (
    <View style={[styles.inputContainer, props.styles]}>
      {focused && <Text style={styles.label}>{props.label}</Text>}

      <View
        style={[
          styles.wrapper,
          {
            flexDirection: getFlexDirection(),
            borderColor: getBorderColor(),
          },
        ]}>
        {props.icon && (
          <TouchableOpacity
            onPress={() => {
              console.log('Icon clicked');
              setShowPassword(!showPassword);
            }}>
            <View style={{paddingHorizontal: 5}}>
              {/* <Ionicon
                name={
                  props.label && props.label.toLowerCase() === 'password'
                    ? showPassword
                      ? 'eye-off-outline'
                      : 'eye-outline'
                    : props.icon
                }
                size={20}
                color={focused ? colors.ui.primary : colors.ui.grey}
              /> */}
            </View>
          </TouchableOpacity>
        )}
        <TextInput
          style={[styles.textInput]}
          autoCapitalize="none"
          multiline={props.multiline}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          secureTextEntry={
            props.label && props.label.toLowerCase() === 'password'
              ? !showPassword
              : false
          }
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </View>
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

export default Input;
