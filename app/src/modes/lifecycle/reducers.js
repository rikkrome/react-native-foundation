import {
  LIFECYCLE_APP_INIT,
  LIFECYCLE_APP_ACTIVE,
  LIFECYCLE_APP_INACTIVE,
  LIFECYCLE_APP_AUTH_CHECK,
  LIFECYCLE_APP_READY,
} from './constants';

const initialState = null;

const ACTION_HANDLERS = {
  [LIFECYCLE_APP_INIT]: () => LIFECYCLE_APP_INIT,
  [LIFECYCLE_APP_ACTIVE]: () => LIFECYCLE_APP_ACTIVE,
  [LIFECYCLE_APP_INACTIVE]: () => LIFECYCLE_APP_INACTIVE,
  [LIFECYCLE_APP_AUTH_CHECK]: () => LIFECYCLE_APP_AUTH_CHECK,
  [LIFECYCLE_APP_READY]: () => LIFECYCLE_APP_READY,
};

export { initialState };

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
