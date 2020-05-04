// DESIGN - UTILITY/HELPER METHODS
// v1.0

import {dlog} from '../utils/helpers';

const tag = 'DESIGN';

/**
 * HSLA TO ARRAY
 * Converts an hsla `string` to an `Array`
 * @private
 * @param {string} hsla string to convert
 * @returns {Array} Returns an hsla Array
 * @example
 *
 * hslaStringToArray('hsla(0, 0%, 0%, 0.5)');
 * // => ['0', '0', '0', 0.5]
 *
 */
const hslaStringToArray = (hsla) => {
  const hslaRE = /\((.*)\)/;
  const percentRE = /%/g;
  const fallback = ['0', '0', '0', '1']; // HSLA BLACK

  try {
    let result = hsla.match(hslaRE)[1];
    result = result.replace(percentRE, '');

    return result.split(', ');
  } catch (error) {
    dlog(tag, 'hslaStringToArray', error);
  }

  return fallback;
};

/**
 * COLOR OPACITY
 * Updates the alpha channel in an hsla `string` for color opacity
 * @param {string} hsla string to convert
 * @param {number|float} transparency float range from 0.00 - 1.00
 * @returns {string} Returns a new hsla string w/ an updated alpha channel
 * @example
 *
 * utils.opacity(colors.black, 0.5);
 * // => 'hsla(0, 0%, 0%, 0.5)'
 *
 */
const opacity = (hsla, transparency = 0.5) => {
  const [min, max] = [0, 1];
  const [h, s, l, a] = hslaStringToArray(hsla);

  try {
    const alpha = transparency < min ? min : transparency > max ? max : transparency; // eslint-disable-line no-nested-ternary
    return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
  } catch (error) {
    dlog(tag, 'opacity', error);
  }

  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

/**
 * COLOR DARKEN
 * Decrements the lightness channel in an hsla `string` to darken a color
 * @param {string} hsla string to convert
 * @param {string} percent string range from '0%' - '100%'
 * @returns {string} Returns a new hsla string w/ an updated lightness channel
 * @example
 *
 * utils.darken(colors.white, '50%');
 * // => 'hsla(0, 0%, 50%, 1)'
 *
 */
const darken = (hsla, percent) => {
  const [min, max] = [0, 100];
  const [h, s, l, a] = hslaStringToArray(hsla);

  try {
    const diff = parseInt(l, 10) - Math.abs(parseInt(percent.replace('%', ''), 10));
    const lightness = diff < min ? min : diff > max ? max : diff; // eslint-disable-line no-nested-ternary

    return `hsla(${h}, ${s}%, ${lightness}%, ${a})`;
  } catch (error) {
    dlog(tag, 'darken', error);
  }

  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

/**
 * COLOR LIGHTEN
 * Increments the lightness channel in an hsla `string` to lighten a color
 * @param {string} hsla string to convert
 * @param {string} percent string range from '0%' - '100%'
 * @returns {string} Returns a new hsla string w/ an updated lightness channel
 * @example
 *
 * utils.lighten(colors.black, '50%');
 * // => 'hsla(0, 0%, 50%, 1)'
 *
 */
const lighten = (hsla, percent) => {
  const [min, max] = [0, 100];
  const [h, s, l, a] = hslaStringToArray(hsla);

  try {
    const sum = parseInt(l, 10) + Math.abs(parseInt(percent.replace('%', ''), 10));
    const lightness = sum < min ? min : sum > max ? max : sum; // eslint-disable-line no-nested-ternary

    return `hsla(${h}, ${s}%, ${lightness}%, ${a})`;
  } catch (error) {
    dlog(tag, 'lighten', error);
  }

  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

/**
 * HSLA TO RGBA
 * Converts an HSLA string to an RGBA string
 * @param {string} hsla string to convert
 * @see {@link https://www.rapidtables.com/convert/color/hsl-to-rgb.html|HSL-to-RGB}
 * @see {@link https://css-tricks.com/converting-color-spaces-in-javascript/#article-header-id-6|HSL-to-RGB}
 * @example
 *
 * utils.hslaToRgba(colors.black);
 * // => 'rgba(0, 0, 0, 1)'
 *
 */
const hslaToRgba = (hsla) => {
  let [r, g, b] = [0, 0, 0];
  const [min, max] = [0, 255];
  const [h, s, l, a] = hslaStringToArray(hsla);
  const [yellow, green, cyan, blue, magenta, red] = [60, 120, 180, 240, 300, 360];
  const degrees = 60;

  try {
    const hue = parseInt(h, 10);
    const saturation = parseInt(s, 10) / 100;
    const lightness = parseInt(l, 10) / 100;

    const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const valX = chroma * (1 - Math.abs(((hue / degrees) % 2) - 1));
    const valM = lightness - chroma / 2;

    if (min <= hue && hue < yellow) {
      r = chroma;
      g = valX;
      b = min;
    } else if (yellow <= hue && hue < green) {
      r = valX;
      g = chroma;
      b = min;
    } else if (green <= hue && hue < cyan) {
      r = min;
      g = chroma;
      b = valX;
    } else if (cyan <= hue && hue < blue) {
      r = min;
      g = valX;
      b = chroma;
    } else if (blue <= hue && hue < magenta) {
      r = valX;
      g = min;
      b = chroma;
    } else if (magenta <= hue && hue < red) {
      r = chroma;
      g = min;
      b = valX;
    }

    r = Math.round((r + valM) * max);
    g = Math.round((g + valM) * max);
    b = Math.round((b + valM) * max);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  } catch (error) {
    dlog(tag, 'hslaToRgba', error);
  }

  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

/**
 * SQUARE ELEMENT
 * Creates a StyleSheet Object to render a square
 * @param {number} num number to use for width/height
 * @returns {Object} Returns a StyleSheet Object
 * @example
 *
 * utils.square(100);
 * // => { width: 100, height: 100 }
 *
 */
const square = (num) => ({
  width: num,
  height: num,
});

/**
 * CIRCLE ELEMENT
 * Creates a StyleSheet Object to render a circle
 * @param {number} num number to use for width/height/borderRadius
 * @returns {Object} Returns a StyleSheet Object
 * @example
 *
 * utils.circle(100);
 * // => { width: 100, height: 100, borderRadius: 50 }
 *
 */
const circle = (num) => ({
  width: num,
  height: num,
  borderRadius: num / 2,
});

/**
 * CENTER ELEMENT HORIZONTALLY + VERTICALLY
 * @returns {Object} Returns a StyleSheet Object
 * @example
 *
 * utils.flexCenter();
 * // => { justifyContent: 'center', alignItems: 'center' }
 *
 */
const flexCenter = () => ({
  justifyContent: 'center',
  alignItems: 'center',
});

/**
 * ABSOLUTE FILL PARENT ELEMENT
 * Note: Exactly the same as absoluteFill vs. absoluteFillObject
 * @see {@link https://facebook.github.io/react-native/docs/stylesheet#absolutefill|React-Native-Docs}
 * @see {@link https://facebook.github.io/react-native/docs/stylesheet#absolutefill-vs-absolutefillobject|React-Native-Docs}
 *
 * @returns {Object} Returns a StyleSheet Object
 * @example
 *
 * utils.absoluteFill();
 * // => { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }
 *
 */
const absoluteFill = () => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

/**
 * ABSOLUTE FILL PARENT ELEMENT & CENTER ELEMENT HORIZONTALLY + VERTICALLY
 * Note: Exactly the same as absoluteFill vs. absoluteFillObject
 * @returns {Object} Returns a StyleSheet Object
 * @example
 *
 * utils.absoluteCenter();
 * // => { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, justifyContent: 'center', alignItems: 'center' }
 *
 */
const absoluteCenter = () => ({
  ...absoluteFill(),
  justifyContent: 'center',
  alignItems: 'center',
});

/**
 * MARGINS - ALL PROPERTIES
 * Note: Works just like CSS!!!
 * @see {@link  https://developer.mozilla.org/en-US/docs/Web/CSS/margin#Syntax|Mozilla-Documentation}
 *
 * @param {Array} args Arguments provided to `function`.
 * @returns {Object} Returns a StyleSheet Object
 * @example
 *
 * utils.margin(5);
 * // => { marginTop: 5, marginRight: 5, marginBottom: 5, marginLeft: 5 }
 *
 * utils.margin(5, 10);
 * // => { marginTop: 5, marginRight: 10, marginBottom: 5, marginLeft: 10 }
 *
 * utils.margin(5, 10, 15);
 * // => { marginTop: 5, marginRight: 10, marginBottom: 15, marginLeft: 10 }
 *
 * utils.margin(0, 5, 10, 15);
 * // => { marginTop: 0, marginRight: 5, marginBottom: 10, marginLeft: 15 }
 *
 */
const margin = (...args) => {
  const obj = {};
  const properties = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
  const arr = [
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 2, 1],
    [0, 1, 2, 3],
  ];

  try {
    const len = args.length - 1;

    properties.forEach((item, index) => {
      obj[item] = args[arr[len][index]];
    });

    return obj;
  } catch (error) {
    dlog(tag, 'margin', error);
  }

  return obj;
};

/**
 * PADDING - ALL PROPERTIES
 * Note: Works just like CSS!!!
 * @see {@link  https://developer.mozilla.org/en-US/docs/Web/CSS/padding#Syntax|Mozilla-Documentation}
 *
 * @param {Array} args Arguments provided to `function`.
 * @returns {Object} Returns a StyleSheet Object
 * @example
 *
 * utils.padding(5);
 * // => { paddingTop: 5, paddingRight: 5, paddingBottom: 5, paddingLeft: 5 }
 *
 * utils.padding(5, 10);
 * // => { paddingTop: 5, paddingRight: 10, paddingBottom: 5, paddingLeft: 10 }
 *
 * utils.padding(5, 10, 15);
 * // => { paddingTop: 5, paddingRight: 10, paddingBottom: 15, paddingLeft: 10 }
 *
 * utils.padding(0, 5, 10, 15);
 * // => { paddingTop: 0, paddingRight: 5, paddingBottom: 10, paddingLeft: 15 }
 *
 */
const padding = (...args) => {
  const obj = {};
  const properties = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
  const arr = [
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 2, 1],
    [0, 1, 2, 3],
  ];

  try {
    const len = args.length - 1;

    properties.forEach((item, index) => {
      obj[item] = args[arr[len][index]];
    });

    return obj;
  } catch (error) {
    dlog(tag, 'padding', error);
  }

  return obj;
};

const utils = {
  hslaStringToArray,
  opacity,
  lighten,
  darken,
  hslaToRgba,
  square,
  circle,
  flexCenter,
  absoluteFill,
  absoluteCenter,
  margin,
  padding,
};

export default utils;
