import utils from './utils';

// HSLA TO STRING
const { hslaStringToArray } = utils;

test('Converts HSLA string to Array', () => {
  const test = 'hsla(205, 98%, 55%, 1)';
  const expected = ['205', '98', '55', '1'];
  expect(hslaStringToArray(test)).toEqual(expect.arrayContaining(expected));
});

// PLZ DO NOT REMOVE
// test('Converting HSLA string to Array has fallback', () => {
//   const test = '#1E9FFD';
//   const expected = ['0', '0', '0', '1'];
//   expect(hslaStringToArray(test)).toEqual(expect.arrayContaining(expected));
// });

// HSLA TO RGBA STRING
const { hslaToRgba } = utils;

test('Converts HSLA to RGBA string', () => {
  const test = 'hsla(205, 98%, 55%, 1)';
  const expected = 'rgba(28, 159, 253, 1)';
  expect(hslaToRgba(test)).toBe(expected);
});

// OPACITY
const { opacity } = utils;

test('Opacity updates alpha channel', () => {
  expect(opacity('hsla(205, 98%, 55%, 1)', 0.75)).toBe('hsla(205, 98%, 55%, 0.75)');
});

test('Opacity does not exceed max value', () => {
  expect(opacity('hsla(205, 98%, 55%, 1)', 2)).toBe('hsla(205, 98%, 55%, 1)');
});

test('Opacity does not exceed min value', () => {
  expect(opacity('hsla(205, 98%, 55%, 1)', -1)).toBe('hsla(205, 98%, 55%, 0)');
});

// DARKEN/LIGHTEN
const { darken, lighten } = utils;

test('Darken updates lightness channel', () => {
  expect(darken('hsla(205, 98%, 55%, 1)', '50%')).toBe('hsla(205, 98%, 5%, 1)');
});

test('Darken does not exceed max value', () => {
  expect(darken('hsla(205, 98%, 102%, 1)', '1%')).toBe('hsla(205, 98%, 100%, 1)');
});

test('Darken does not exceed min value', () => {
  expect(darken('hsla(205, 98%, -2%, 1)', '-1%')).toBe('hsla(205, 98%, 0%, 1)');
});

test('Lighten updates lightness channel', () => {
  expect(lighten('hsla(205, 98%, 45%, 1)', '50%')).toBe('hsla(205, 98%, 95%, 1)');
});

test('Lighten does not exceed max value', () => {
  expect(lighten('hsla(205, 98%, 102%, 1)', '1%')).toBe('hsla(205, 98%, 100%, 1)');
});

test('Lighten does not exceed min value', () => {
  expect(lighten('hsla(205, 98%, -2%, 1)', '-1%')).toBe('hsla(205, 98%, 0%, 1)');
});

// MARGIN/PADDING
const { margin, padding } = utils;

test('Margin w/ one val updates [all] properties', () => {
  expect(margin(1)).toEqual({ marginTop: 1, marginRight: 1, marginBottom: 1, marginLeft: 1 });
});

test('Margin w/ two val updates [top|bottom, right|left] properties', () => {
  expect(margin(1, 2)).toEqual({ marginTop: 1, marginRight: 2, marginBottom: 1, marginLeft: 2 });
});

test('Margin w/ three val updates [top, right|left, bottom] properties', () => {
  expect(margin(1, 2, 3)).toEqual({ marginTop: 1, marginRight: 2, marginBottom: 3, marginLeft: 2 });
});

test('Margin w/ four val updates [top, right, bottom, left] properties', () => {
  expect(margin(1, 2, 3, 4)).toEqual({ marginTop: 1, marginRight: 2, marginBottom: 3, marginLeft: 4 });
});

test('Padding w/ one val updates [all] properties', () => {
  expect(padding(1)).toEqual({ paddingTop: 1, paddingRight: 1, paddingBottom: 1, paddingLeft: 1 });
});

test('Padding w/ two val updates [top|bottom, right|left] properties', () => {
  expect(padding(1, 2)).toEqual({ paddingTop: 1, paddingRight: 2, paddingBottom: 1, paddingLeft: 2 });
});

test('Padding w/ three val updates [top, right|left, bottom] properties', () => {
  expect(padding(1, 2, 3)).toEqual({ paddingTop: 1, paddingRight: 2, paddingBottom: 3, paddingLeft: 2 });
});

test('Padding w/ four val updates [top, right, bottom, left] properties', () => {
  expect(padding(1, 2, 3, 4)).toEqual({ paddingTop: 1, paddingRight: 2, paddingBottom: 3, paddingLeft: 4 });
});
