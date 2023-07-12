import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './Detail';
import HomeScreen from './Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from './Settings';
import DiscoverScreen from './Discover';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export type MainStackParamList = {
  Home: undefined;
  Detail: undefined;
};

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export type DiscoverStackParamList = {
  Discover: undefined;
  Detail: undefined;
};

const DiscoverNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export type SettingsStackParamList = {
  Settings: undefined;
  Detail: undefined;
};

const SettingsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeStack"
          component={MainNavigation}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen
          name="DiscoverStack"
          component={DiscoverNavigation}
          options={{tabBarLabel: 'Discover'}}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsNavigation}
          options={{tabBarLabel: 'Settings'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
