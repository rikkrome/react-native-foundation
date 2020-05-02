import { useState, useEffect } from 'react';
import { AppState } from 'react-native';
import { useDispatch } from 'react-redux';
import { lifecycleActive, lifecycleInactive } from '../../modes/lifecycle/actions';
import { isString } from '../helpers';

const useAppState = () => {
  const dispatch = useDispatch();
  const [appState, setAppState] = useState(null);


  useEffect(() => {
    const handleEventListener = (nextAppState) => {
      const next = isString(nextAppState) ? nextAppState : '';
      if (next === 'inactive') return; // iOS Only. Ignore.

      setAppState(() => {
        if (next === 'background') {
          dispatch(lifecycleInactive());
        } else if (next === 'active') {
          dispatch(lifecycleActive());
        }

        return next;
      });
    };

    // FORCE ON MOUNT IF STATE IS ALREADY ACTIVE
    if (AppState.currentState === 'active') {
      handleEventListener(AppState.currentState);
    }

    AppState.addEventListener('change', handleEventListener);
    return () => {
      AppState.removeEventListener('change', handleEventListener);
    };
  }, [dispatch]);

  return appState;
};

export default useAppState;
