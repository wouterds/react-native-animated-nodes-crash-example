import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {styles} from './styles';

const Shimmer = memo(() => (
  <ShimmerPlaceholder
    style={styles.container}
    isInteraction={false}
    LinearGradient={LinearGradient}
    shimmerColors={[
      'rgba(255, 255, 255, 0.125)',
      'rgba(255, 255, 255, 0.25)',
      'rgba(255, 255, 255, 0.5)',
    ]}
  />
));

export default Shimmer;
