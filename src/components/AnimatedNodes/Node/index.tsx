import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const AnimatedNode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  );
};

export default AnimatedNode;
