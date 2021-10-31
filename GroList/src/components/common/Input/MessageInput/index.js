import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import colors from '../../../../assets/theme/colors';
import styles from './styles';
import Ionicon from 'react-native-vector-icons/Ionicons';

const MessageInput = props => {
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
    <View style={styles.inputContainer}>
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
              props.onSubmit();
            }}>
            <Ionicon
              name={props.icon}
              size={20}
              color={focused ? colors.ui.primary : colors.ui.grey}
            />
          </TouchableOpacity>
        )}
        <TextInput
          autoCorrect={false}
          style={[styles.textInput, props.style]}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          secureTextEntry={false}
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

export default MessageInput;
