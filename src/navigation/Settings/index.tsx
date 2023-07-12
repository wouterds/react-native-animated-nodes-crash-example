import React from 'react';
import Layout from '../../components/Layout';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SettingsStackParamList} from '../RootNavigation';
import {styles} from './styles';

const SettingsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SettingsStackParamList>>();

  return (
    <Layout>
      <Text>Settings</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={styles.button}>
        <Text style={styles.buttonLabel}>Push Detail Screen</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default SettingsScreen;
