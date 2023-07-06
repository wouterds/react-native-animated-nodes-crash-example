import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Shimmer from '../../Shimmer';

const AnimatedNode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Shimmer />
      </View>
    </View>
  );
};

export default AnimatedNode;
