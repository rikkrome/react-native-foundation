/**
 * GET RAW TYPEOF
 * Resolves issue where typeof returns incorrect element type
 * @example

 * ISSUE:
 * typeof {} === typeof [] | "object" === "object" (TRUE)
 *
 * SOLUTION:
 * getRawTypeof({}) === getRawTypeof([]) | "[object Object]" === "[object Array]" (FALSE)
 */

const _toString = Object.prototype.toString;

export const getRawTypeof = (val) => {
  return _toString.call(val).slice(8, -1);
};

export const isString = (val) => getRawTypeof(val) === 'String';
export const isNumber = (val) => getRawTypeof(val) === 'Number';
export const isArray = (val) => getRawTypeof(val) === 'Array';
export const isObject = (val) => getRawTypeof(val) === 'Object';
export const isFunction = (val) => getRawTypeof(val) === 'Function';
export const isRegExp = (val) => getRawTypeof(val) === 'RegExp';
