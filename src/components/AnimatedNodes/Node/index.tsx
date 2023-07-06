import React, {useMemo} from 'react';
import {View} from 'react-native';
import {createStyles} from './styles';
import Shimmer from '../../Shimmer';

export enum AnimatedNodeTheme {
  Blue = 'blue',
  Yellow = 'yellow',
}

type Props = {
  theme: AnimatedNodeTheme.Blue | AnimatedNodeTheme.Yellow;
};

const AnimatedNode = ({theme}: Props) => {
  const styles = useMemo(() => createStyles({theme}), [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Shimmer />
      </View>
    </View>
  );
};

export default AnimatedNode;
