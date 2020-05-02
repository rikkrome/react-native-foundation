// USER ACTIONS
//
import { postUserLoginAPI } from './api';
import {
  USER_IDENTITIES_REMOVE, USER_IDENTITIES_UNAVAILABLE,
} from './constants';
import { AUTH_ACTIVE, AUTH_INACTIVE } from '../auth/constants';
import NavigationService from '../../services/react_navigation/navigation_service';
import storage from '../../services/async_storage';

export const fetchUserLogin = (credentials) => async (dispatch, getState) => {
  let type = null;
  let data = null;
  let error = {};

  try {
    const { payload, payloadError } = await postUserLoginAPI(credentials);
    if (payloadError.hasError) throw payloadError;

    data = payload;
    type = AUTH_ACTIVE;

    await storage.save(storage.keys.USER_AUTH, payload);
  } catch (err) {
    error = err;
    type = AUTH_INACTIVE;
  }

  dispatch({ type });

  return {
    type,
    data,
    error,
  };
};


export const logout = () => async (dispatch, getState) => {
  // HMM... NOT SURE WHAT THE ORDER SHOULD BE???
  //
  NavigationService.switchNavigate('Auth');
  storage.kill(storage.keys.USER_AUTH);
  dispatch({ type: USER_IDENTITIES_REMOVE });
  dispatch({ type: USER_IDENTITIES_UNAVAILABLE });
  dispatch({ type: AUTH_INACTIVE });
};

export const test = '';
