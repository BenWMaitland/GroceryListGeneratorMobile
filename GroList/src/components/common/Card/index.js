import React from 'react';
import {View, Text} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Card = ({...props}) => {
  return (
    <View style={[styles.cardContainer, props.style]}>{props.children}</View>
  );
};

export default Card;
