import { StyleSheet } from 'react-native';
import { colors, utils, fontSize } from '../../../design';

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.transparent,
    backgroundColor: colors.transparent,
    borderRadius: 3,
    textAlign: 'center',
    flexDirection: 'row',
    ...utils.flexCenter(),
  },
  buttonText: {
    fontSize: fontSize.xs,
    color: colors.white,
    textTransform: 'uppercase',
  },
  disabledButtonText: {
    color: colors.grayLight,
  },
  defaultBg: {
    borderColor: colors.grayLight,
    backgroundColor: colors.grayLight,
  },
  infoBg: {
    borderColor: colors.info,
    backgroundColor: colors.info,
  },
  successBg: {
    borderColor: colors.success,
    backgroundColor: colors.success,
  },
  warningBg: {
    borderColor: colors.warning,
    backgroundColor: colors.warning,
  },
  dangerBg: {
    borderColor: colors.danger,
    backgroundColor: colors.danger,
  },
  children: {
    flexDirection: 'row',
    ...utils.flexCenter(),
  },
  disabled: {
    // opacity: 0.5,
    borderColor: colors.grayDark,
    backgroundColor: colors.grayDark,
  },
});

export default styles;
