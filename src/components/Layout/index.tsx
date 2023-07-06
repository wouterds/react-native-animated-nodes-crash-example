import React, {useMemo} from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {createStyles} from './styles';

type Props = {
  children: ReactNode;
};

const Layout = ({children}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = useMemo(() => createStyles(isDarkMode), [isDarkMode]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView>{children}</SafeAreaView>
    </ScrollView>
  );
};

export default Layout;
