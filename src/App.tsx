import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {styles} from './styles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;
