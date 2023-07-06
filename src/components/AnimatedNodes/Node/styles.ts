import {StyleSheet, ViewStyle} from 'react-native';

type Props = {
  alt?: boolean;
};

export const createStyles = ({alt}: Props) => {
  const box: ViewStyle = {
    backgroundColor: '#61dafb',
    width: 18,
    height: 18,
    borderRadius: 4,
    overflow: 'hidden',
  };

  if (alt) {
    box.backgroundColor = '#f1c40f';
  }

  return StyleSheet.create({
    container: {
      padding: 4,
    },
    box,
  });
};
