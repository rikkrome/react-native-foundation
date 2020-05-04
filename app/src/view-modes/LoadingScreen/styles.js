import { StyleSheet } from 'react-native';
import {
  utils, device, fonts, fontSize, colors,
} from '../../design';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColor: {
    backgroundColor: 'black',
  },
  text: {
    ...fonts.primary,
    color: colors.white,
  },
});

export default styles;
