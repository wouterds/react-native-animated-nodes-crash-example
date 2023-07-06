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
      'rgba(255, 255, 255, 0.1)',
      'rgba(255, 255, 255, 0.2)',
      'rgba(255, 255, 255, 0.3)',
    ]}
  />
));

export default Shimmer;
