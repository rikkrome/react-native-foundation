import { StyleSheet } from 'react-native';
import {
  utils, device, fonts, fontSize, colors,
} from '../../design';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...fonts.primary,
  },
  button: {
    width: '100%',
  },
});

export default styles;
