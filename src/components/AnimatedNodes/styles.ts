import {StyleSheet} from 'react-native';
import {COLOR_BLUE, COLOR_YELLOW} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontVariant: ['tabular-nums'],
  },
  blueText: {
    color: COLOR_BLUE,
  },
  yellowText: {
    color: COLOR_YELLOW,
  },
  nodes: {
    marginTop: 8,
    marginHorizontal: -2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
