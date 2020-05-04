import noop from './noop';

const isDefaultPropFunction = (fn) => {
  if (typeof fn !== 'function') return true;
  return fn.toString() === noop.toString();
};

export default isDefaultPropFunction;
