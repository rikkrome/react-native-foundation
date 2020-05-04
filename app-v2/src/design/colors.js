// DESIGN - COLOR PALETTE
// v1.0

// HSLA COLOR CONVERTER:
// https://www.w3schools.com/colors/colors_converter.asp
//

const colors = {
  // APP UI
  // ex. colors['brand'] || colors.brand
  //
  brand: 'hsla(205, 98%, 55%, 1)', // #1E9FFD - UI BLUE/"AZURE"

  // GRAYSCALE
  // ex. colors['white'] || colors.white
  //
  white: 'hsla(0, 0%, 100%, 1)', // #FFFFFF
  grayLightest: 'hsla(0, 0%, 47%, 1)', // #777777 - "Lite Gray"
  grayLight: 'hsla(0, 0%, 27%, 1)', // #454545 - "CTA Gray"
  gray: 'hsla(0, 0%, 19%, 1)', // #303030 - "Highlight Gray"
  grayDark: 'hsla(0, 0%, 15%, 1)', // #252525 - "Tile Gray"
  grayDarkest: 'hsla(0, 0%, 10%, 1)', // #1A1A1A - "BG Gray"
  black: 'hsla(0, 0%, 0%, 1)', // #000000

  // ex. colors['danger'] || colors.danger
  //
  info: 'hsla(205, 98%, 55%, 1)', // #1E9FFD - BLUE
  success: 'hsla(148, 71%, 50%, 1)', // #25D87A - GREEN
  warning: 'hsla(44, 79%, 67%, 1)', // #EDC967 - YELLOW
  danger: 'hsla(0, 100%, 42%, 1)', // #D50000 - RED

  // MISC/HELPERS ACCENTS
  // ex. colors['transparent'] || colors.transparent
  //

  base: 'hsla(20, 5%, 22%, 1)', // #3C3836
  common: 'hsla(89, 93%, 72%, 1)', // #BBFA76
  rare: 'hsla(198, 51%, 66%, 1)', // #7CBAD4
  epic: 'hsla(272, 95%, 84%, 1)', // #D8AEFD
  legendary: 'hsla(37, 100%, 48%, 1)', // #F39700

  gold: 'hsla(41, 78%, 53%, 1)', // #E5A929
  silver: 'hsla(260, 2%, 65%, 1)', // #A6A5A8
  bronze: 'hsla(21, 62%, 42%, 1)', // #AE5829

  transparent: 'hsla(0, 0%, 0%, 0)', // 'transparent'

  // GRADIENTS
  //

  goldGradient: [
    'hsla(42, 65%, 41%, 1)',
    'hsla(56, 87%, 75%, 1)',
    'hsla(44, 61%, 55%, 1)',
    'hsla(44, 79%, 67%, 1)',
  ],
  silverGradient: [
    'hsla(0, 0%, 53%, 1)',
    'hsla(0, 0%, 100%, 1)',
    'hsla(0, 0%, 52%, 1)',
    'hsla(0, 0%, 45%, 1)',
  ],
};

export default colors;
