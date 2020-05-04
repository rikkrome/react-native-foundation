import {
  LIFECYCLE_APP_ACTIVE,
  LIFECYCLE_APP_INACTIVE,
  LIFECYCLE_APP_AUTH_CHECK,
  LIFECYCLE_APP_READY,
} from './constants';
import { AUTH_ACTIVE } from '../auth/constants';
import { fetchCoreDependencies } from '../core/actions';
import { getUserAuth } from '../../utils/helpers';

export const lifecycleAppReady = () => async (dispatch, getState) => {
  dispatch({ type: LIFECYCLE_APP_READY });
};

export const lifecycleAuthCheck = () => async (dispatch, getState) => {
  dispatch({ type: LIFECYCLE_APP_AUTH_CHECK });

  const state = getState();
  const { core } = state;

  if (!core.hasAuthSession) {
    const userAuth = await getUserAuth();
    if (userAuth && userAuth.accessToken) dispatch({ type: AUTH_ACTIVE });
  }

  await dispatch(fetchCoreDependencies());

  dispatch(lifecycleAppReady());
};

export const lifecycleActive = () => async (dispatch, getState) => {
  dispatch({ type: LIFECYCLE_APP_ACTIVE });
  // ADD TRACKING... ETC.
  dispatch(lifecycleAuthCheck());
};

export const lifecycleInactive = () => async (dispatch, getState) => {
  dispatch({ type: LIFECYCLE_APP_INACTIVE });
};
