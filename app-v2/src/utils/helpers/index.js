import { log, dlog } from './log';
import getUserAuth from './getUserAuth';
import {
  isString, isNumber, isArray, isObject, isFunction, isRegExp,
} from './getRawTypeof';

import noop from './noop';
import isDefaultPropFunction from './isDefaultPropFunction';

export {
  log, dlog, getUserAuth, isString, isNumber, isArray, isObject, isFunction, isRegExp, noop, isDefaultPropFunction,
};
