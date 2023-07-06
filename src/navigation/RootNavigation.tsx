import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen from './Screen';
import Home from './Home';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Screen: undefined;
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
