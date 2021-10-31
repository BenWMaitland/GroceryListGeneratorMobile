import React from 'react';
import {View} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';

const uploadProgress = ({...props}) => {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={props.process} width={350} />
    </View>
  );
};

export default uploadProgress;
