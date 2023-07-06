import React, {useEffect, useRef, useState} from 'react';
import AnimatedNode from './Node';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {formatDistanceToNowStrict} from 'date-fns';

// in milliseconds
const INTERVAL = 250;

const AnimatedNodes = () => {
  const startTime = useRef(new Date()).current;
  const uniqueId = useRef(
    Math.random() * startTime.getTime() + startTime.getTime(),
  ).current;
  const [nodes, setNodes] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNodes(nodes + 1);
    }, INTERVAL);

    return () => {
      clearTimeout(timeout);
    };
  }, [nodes]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Elapsed time: {formatDistanceToNowStrict(startTime)}
        </Text>
        <Text style={styles.text}>nodes: {nodes}</Text>
      </View>
      <View style={styles.nodes}>
        {Array.from(Array(nodes).keys()).map(node => (
          <AnimatedNode key={`animated-nodes:${uniqueId}.node:${node}`} />
        ))}
      </View>
    </View>
  );
};

export default AnimatedNodes;
