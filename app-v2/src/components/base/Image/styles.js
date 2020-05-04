
import { StyleSheet } from 'react-native';
import {
  colors, utils,
} from '../../../design';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    // margin
    overflow: 'hidden',
    borderRadius: 10,
  },
  imageContainer: {
    ...utils.absoluteFill(),
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
  },
});

export default styles;
