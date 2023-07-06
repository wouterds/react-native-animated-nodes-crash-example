import {StyleSheet} from 'react-native';

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
  nodes: {
    marginTop: 8,
    marginHorizontal: -2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
