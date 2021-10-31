import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Button = ({...props}) => {
  const getButtonType = () => {
    if (props.disabled) {
      return styles.disabled;
    }
    if (props.primary) {
      return styles.primary;
    }
    if (props.alternate) {
      return styles.alternate;
    }
    if (props.danger) {
      return styles.danger;
    }
  };

  const getTextStyle = () => {
    if (props.disabled) {
      return styles.disabledButtonText;
    }
    if (props.primary) {
      return styles.primaryButtonText;
    }
    if (props.alternate) {
      return styles.alternateButtonText;
    }
    if (props.danger) {
      return styles.dangerButtonText;
    }
  };

  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={[getButtonType(), props.style]}>
      <View style={styles.loader}>
        {props.loading ? (
          <ActivityIndicator // this is the loading icon component
            color={props.disabled ? colors.ui.darkGrey : colors.ui.secondary}
          />
        ) : (
          props.title && <Text style={getTextStyle()}>{props.title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
