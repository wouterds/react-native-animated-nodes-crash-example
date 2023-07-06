import React, {useMemo} from 'react';
import {View} from 'react-native';
import {createStyles} from './styles';
import Shimmer from '../../Shimmer';

type Props = {
  alt?: boolean;
};

const AnimatedNode = ({alt}: Props) => {
  const styles = useMemo(() => createStyles({alt}), [alt]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Shimmer />
      </View>
    </View>
  );
};

export default AnimatedNode;
