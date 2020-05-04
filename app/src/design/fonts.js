// DESIGN - TYPOGRAPHY
// v1.0

import colors from './colors';
import device from './device';

export const fontSize = {
  base: 16,
  xs: 11,
  sm: 13,
  md: 18,
  lg: 24,
  xl: 30,
  xxl: 36,
};

// NOT RECOMMENDED!!!
// AVOID USING: Using w/ a non-supported font could cause weird side effects
// NOTE: Font Weights works best w/ 'Montserrat' as it supports multiple weights
//
export const fontWeight = {
  regular: '400',
  // Android can't render Medium Weight.
  // Default to Regular weight.
  medium: device.isIOS ? '500' : '400',
  // Android can't render SemiBold weight.
  // Default to Bold weight.
  semiBold: device.isIOS ? '600' : '700',
  bold: '700',
};

// NOT RECOMMENDED!!!
// AVOID USING: These don't have fallbacks or style specificity
//
export const fontFamily = {
  primary: 'Arial',
  secondary: 'Arial', // FONT ONLY SUPPORTS 1 WEIGHT
  tertiary: 'Arial', // FONT ONLY SUPPORTS 1 WEIGHT
};

// RECOMMENDED: Plz use the following
//
export const fonts = {
  primary: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.medium,
    fontStyle: 'normal',
    fontSize: fontSize.base,
    color: colors.black,
  },
  primarySemiBold: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.semiBold,
    fontStyle: 'normal',
    fontSize: fontSize.base,
    color: colors.black,
  },
  primaryBold: {
    fontFamily: fontFamily.primary,
    fontWeight: fontWeight.bold,
    fontStyle: 'normal',
    fontSize: fontSize.base,
    color: colors.black,
  },
  secondary: {
    fontFamily: fontFamily.secondary,
    fontWeight: fontWeight.bold,
    fontStyle: 'normal',
    fontSize: fontSize.base,
    color: colors.black,
  },
  tertiary: {
    fontFamily: fontFamily.tertiary,
    fontWeight: fontWeight.regular,
    fontStyle: 'normal',
    fontSize: fontSize.base,
    color: colors.black,
  },
};
