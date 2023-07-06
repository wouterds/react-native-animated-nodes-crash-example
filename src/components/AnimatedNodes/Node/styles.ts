import {StyleSheet, ViewStyle} from 'react-native';
import {AnimatedNodeTheme} from '.';
import {COLOR_BLUE, COLOR_YELLOW} from '../../../styles';

type Props = {
  theme: AnimatedNodeTheme;
};

export const createStyles = ({theme}: Props) => {
  const box: ViewStyle = {
    backgroundColor: '#999',
    width: 18,
    height: 18,
    borderRadius: 4,
    overflow: 'hidden',
  };

  if (theme === AnimatedNodeTheme.Blue) {
    box.backgroundColor = COLOR_BLUE;
  }

  if (theme === AnimatedNodeTheme.Yellow) {
    box.backgroundColor = COLOR_YELLOW;
  }

  return StyleSheet.create({
    container: {
      padding: 4,
    },
    box,
  });
};
