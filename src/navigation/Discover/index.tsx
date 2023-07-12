import React from 'react';
import AnimatedNodes from '../../components/AnimatedNodes';
import Layout from '../../components/Layout';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DiscoverStackParamList} from '../RootNavigation';
import {styles} from './styles';

const DiscoverScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DiscoverStackParamList>>();

  return (
    <Layout>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={styles.button}>
        <Text style={styles.buttonLabel}>Push Detail Screen</Text>
      </TouchableOpacity>
      <AnimatedNodes />
    </Layout>
  );
};

export default DiscoverScreen;
