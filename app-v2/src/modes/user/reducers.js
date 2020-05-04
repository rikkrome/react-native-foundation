// USER REDUCERS
//
import { USER_IDENTITIES_ADD, USER_IDENTITIES_REMOVE } from './constants';

const initialState = {
  titleIdentities: [],
};

const ACTION_HANDLERS = {
  [USER_IDENTITIES_ADD]: (state, action) => {
    const { payload } = action;
    return { ...state, ...payload };
  },
  [USER_IDENTITIES_REMOVE]: (state, action) => {
    return { ...state, ...initialState };
  },
};

export { initialState };

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
