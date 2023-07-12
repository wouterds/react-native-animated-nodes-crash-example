import React from 'react';
import AnimatedNodes from '../../components/AnimatedNodes';
import Layout from '../../components/Layout';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootNavigation';
import {styles} from './styles';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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

export default HomeScreen;
