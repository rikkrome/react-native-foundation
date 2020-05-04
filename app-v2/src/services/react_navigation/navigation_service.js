import { CommonActions, StackActions } from '@react-navigation/native';
import { log, dlog } from '../../utils/helpers';

const tag = 'NAVIGATION_SERVICE';
let _navigator;

/**
 * SET NAVIGATION CONTAINER
 * Sets a reference to the `AppNavigationContainer` to allow global access
 * @param {function} navRef
 */
const setNavigationContainer = (navRef) => {
  _navigator = navRef;
};

/**
 * NAVIGATION ACTION
 * @param {string} name
 * @param {object} params
 * @param {string} type
 */
const navAction = (name, params, type = 'Navigation/NAVIGATE') => CommonActions.navigate({ type, name, params });

/**
 * GET CURRENT NAVIGATION ROUTE
 * Recursively traverses the `AppNavigationContainer` and gets the current route
 * @param {object} navRoute
 * @returns {object} Object w/ current route
 */
const getCurrentNavigationRoute = (navRoute) => {
  try {
    if (!navRoute) return null;
    if (navRoute && navRoute.index >= 0 && navRoute.routes.length > 0) {
      return getCurrentNavigationRoute(navRoute.routes[navRoute.index]);
    }
    return navRoute;
  } catch (error) {
    dlog(tag, 'getCurrentNavigationRoute ', error);
  }
  return navRoute;
};

/**
 * ON NAVIGATION CHANGE
 * @param {object} prev
 * @param {object} next
 * @param {object} action
 */
const onNavigationChange = (prev, next, action) => {
  try {
    // HELPS AVOID TRACKING NON-NAVIGATION CHANGES
    if (action && action.type !== 'Navigation/COMPLETE_TRANSITION') {
      const route = getCurrentNavigationRoute(next);
      log('Tracking:', route && route.routeName, route);
    }
  } catch (error) {
    dlog(tag, 'onNavigationChange ', error);
  }
};

/**
 * NAVIGATE TO ROUTE
 * @param {string} routeName
 * @param {object} params
 * @param {string} type
 */
const navigate = (routeName, params) => {
  try {
    _navigator.dispatch(navAction(routeName, params));
  } catch (error) {
    dlog(tag, 'navigate ', error);
  }
};

/**
 * NAVIGATES DEEP TO A ROUTE
 * @param {array} actions A collection of actions to go to
 */
const navigateDeep = (actions) => {
  try {
    _navigator.dispatch(
      actions.reduceRight((prevAction, action) => CommonActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName: action.routeName,
        params: action.params,
        action: prevAction,
      }), undefined),
    );
  } catch (error) {
    dlog(tag, 'navigateDeep ', error);
  }
};

/**
 * RESET
 * Navigates to route and deletes its previous history
 * @param {string} routeName
 * @param {object} params
 */
const reset = (routeName, params) => {
  try {
    _navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }],
      }),
    );
  } catch (error) {
    dlog(tag, 'reset ', error);
  }
};

/**
 * REPLACE
 * Navigates by taking the current route and replacing its point in history w/ the new route
 * @param {string} routeName
 * @param {object} params
 */
const replace = (routeName, params) => {
  try {
    _navigator.dispatch(StackActions.replace(routeName, params));
    _navigator.dispatch(
      StackActions.replace({
        type: 'Navigation/REPLACE',
        routeName,
        params,
      }),
    );
  } catch (error) {
    dlog(tag, 'replace ', error);
  }
};

/**
 * GO BACK
 * @param {string} from Name of the route you are navigating away from
 */
const goBack = (from) => {
  try {
    _navigator.dispatch({
      ...CommonActions.goBack(),
      source: from || null,
      type: 'Navigation/BACK',
    });
  } catch (error) {
    dlog(tag, 'goBack ', error);
  }
};

export default {
  goBack,
  reset,
  replace,
  navAction,
  navigate,
  navigateDeep,
  onNavigationChange,
  setNavigationContainer,
};
