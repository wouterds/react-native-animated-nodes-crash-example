import React, {useEffect, useMemo, useRef, useState} from 'react';
import AnimatedNode, {AnimatedNodeTheme} from './Node';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {formatDistanceToNowStrict} from 'date-fns';

// in milliseconds
const INTERVAL = 1000;

const AnimatedNodes = () => {
  const startTime = useRef(new Date()).current;
  const uniqueId = useRef(
    Math.random() * startTime.getTime() + startTime.getTime(),
  ).current;
  const [nodes, setNodes] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNodes(nodes + 1);
    }, INTERVAL);

    return () => {
      clearTimeout(timeout);
    };
  }, [nodes]);

  const randomNodes = useMemo(() => {
    return Math.ceil(
      Math.max(Math.min(Math.random() * nodes, nodes * 0.3), nodes * 0.1),
    );
  }, [nodes]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          elapsed time: {formatDistanceToNowStrict(startTime)}
        </Text>
        <Text style={styles.text}>
          nodes: {nodes + randomNodes} (
          <Text style={styles.blueText}>{nodes}</Text>,{' '}
          <Text style={styles.yellowText}>{randomNodes}</Text>)
        </Text>
      </View>
      <View style={styles.nodes}>
        {Array.from(Array(nodes).keys()).map(node => (
          <AnimatedNode
            key={`animated-nodes:${uniqueId}.node:${node}`}
            theme={AnimatedNodeTheme.Blue}
          />
        ))}
        {Array.from(Array(randomNodes).keys()).map(node => (
          <AnimatedNode
            key={`animated-nodes:${uniqueId}.node:${node}`}
            theme={AnimatedNodeTheme.Yellow}
          />
        ))}
      </View>
    </View>
  );
};

export default AnimatedNodes;
