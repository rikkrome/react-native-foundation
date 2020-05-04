import { AUTH_ACTIVE, AUTH_INACTIVE } from '../auth/constants';
import { ERROR_GLOBAL_ACTIVE, ERROR_GLOBAL_INACTIVE } from '../error/constants';

const initialState = {
  hasGlobalError: false,
  hasNetworkConnection: true,
  hasAuthSession: false,
  hasDictionary: false,
  deeplink: null,
};

const ACTION_HANDLERS = {
  [ERROR_GLOBAL_ACTIVE]: (state, action) => ({ ...state, ...{ hasGlobalError: true } }),
  [ERROR_GLOBAL_INACTIVE]: (state, action) => ({ ...state, ...{ hasGlobalError: false } }),
  [AUTH_ACTIVE]: (state, action) => ({ ...state, ...{ hasAuthSession: true } }),
  [AUTH_INACTIVE]: (state, action) => ({ ...state, ...{ hasAuthSession: false } }),
  // [DEEPLINK_ADD]: (state, action) => {
  //   const { payload } = action;
  //   return { ...state, ...payload };
  // },
  // [DEEPLINK_REMOVE]: (state, action) => {
  //   const { payload } = action;
  //   return { ...state, ...payload };
  // },
};

export { initialState };

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
