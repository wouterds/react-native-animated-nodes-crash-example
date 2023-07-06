import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const createStyles = (isDarkMode: boolean) => {
  const container: ViewStyle = {
    flex: 1,
    backgroundColor: Colors.lighter,
  };

  if (isDarkMode) {
    container.backgroundColor = Colors.darker;
  }

  return StyleSheet.create({
    container,
    content: {
      padding: 16,
    },
  });
};
