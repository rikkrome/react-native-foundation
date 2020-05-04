// API - REQUEST HANDLERS
// Builds upon the previous `handlers.js`
// v2.0

import axios from 'axios';
import { noop, getUserAuth } from '../../utils/helpers';
import {
  ERROR_API, ERROR_SERVER, ERROR_NETWORK, ERROR_AUTH, ERROR_FORCE,
} from '../../modes/error/constants';

const tag = '[API REQUEST]';

const API = {};

const globalHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * API - ERROR TYPES
 * A high level error type indicator for the issue occuring.
 * For a more detailed error message along w/ the error type see `API.error`
 */
API.errorTypes = {
  api: ERROR_API, // 4XX Bad Requests/Forbidden
  server: ERROR_SERVER, // 5XX Server/Service Errors
  network: ERROR_NETWORK,
  auth: ERROR_AUTH,
  force: ERROR_FORCE,
};

/**
 * API - ERROR
 * Generates a properly formated error
 * @param {string} error The type of error that occured. See `API.errorTypes` for more info.
 * @param {string} url The endpoint that was Requested.
 * @param {string} message A custom message or response from the server
 * @returns {object} Returns an error object.
 * @example
 *
 * API.error(API.errorTypes.server, requestUrl, 'Error from datastore');
 *
 */
API.error = (error, url = '/', message = '') => {
  const errorBag = {
    message,
    type: error,
    hasError: true,
    description: `[${error}]:${message} (${url})`,
  };

  // if (__DEV__) {
  //   console.error(errorBag.description);
  //   console.trace(errorBag);
  // }

  return errorBag;
};

/**
 * API - AUTH
 * Determines if a user is authenticated
 * @returns {object} Returns the proper headers and authentication status.
 */
API.auth = async () => {
  let isAuthenticated = false;
  const headers = {};
  const userAuth = await getUserAuth();

  if (userAuth && userAuth.ACT_SSO_COOKIE) {
    // FUTURE SSO: REFRESH TOKEN (rtkn)
    // NOT SURE HOW THIS IS USED YET?
    //
    const rtkn = '';
    headers.Cookie = `ACT_SSO_COOKIE=${userAuth.ACT_SSO_COOKIE}&rtkn=${rtkn}`;
    // headers.Cookie = `ACT_SSO_COOKIE=${userAuth.ACT_SSO_COOKIE}`;
    headers['Atvi-Auth'] = `Bearer ${userAuth.ACT_SSO_COOKIE}`;
    isAuthenticated = true;
  }

  return {
    headers,
    isAuthenticated,
  };
};

/**
 * API - AJAX
 * Handles async Requests using Axios
 * @param {string} requestMethod Specifices the request method type (get | post | put | patch | delete)
 * @param {string} requestUrl Url for the Request
 * @param {object} requestOptions Additional configuration options or post data. Ex: { headers: {...}, data: {...} }
 * @param {boolean} requiresAuth Determines whether authentication is a requirement for an endpoint
 * @param {function} onSuccess Event to fire onSuccess
 * @param {function} onError Event to fire onError
 * @returns {object} Returns the proper response and errors.
 */
API.ajax = async (requestMethod, requestUrl, requestOptions = {}, requiresAuth = true, onSuccess = noop, onError = noop) => {
  let headers = { ...globalHeaders };
  let response = null;
  let responseError = {};

  try {
    // AUTH CHECK: IF REQUIRED, EXIT ON FAILURE
    //
    if (requiresAuth) {
      const auth = await API.auth();
      headers = { ...headers, ...auth.headers };
      if (!auth.isAuthenticated) throw API.error(API.errorTypes.auth, requestUrl);
    }

    // SETUP REQUEST & FETCH W/ AXIOS
    //
    const options = { headers, ...requestOptions };

    const { status, data = {} } = await axios({
      method: requestMethod,
      url: requestUrl,
      ...options,
    });

    // REQUEST: BASIC ERROR CHECK
    // Status Code - [x], API Response Status - [x], API Response Errors - [x]
    //
    if (status !== 200 || (data.status && data.status !== 'success') || (data.errors && data.errors.length > 0)) {
      throw API.error(API.errorTypes.server, requestUrl, data.data && data.data.message ? data.data.message : '');
    }

    response = data; // ASSIGN RESPONSE DATA
    onSuccess(); // OPTIONAL: SUCCESS CALLBACK
  } catch (err) {
    let message = '';

    if (err.response) {
      message = err.response.data && err.response.data.message ? err.response.data.message : '';
      responseError = API.error(API.errorTypes.api, requestUrl, message);
    } else if (err.request) {
      message = err.request.response || err.request.responseText || '';
      responseError = API.error(API.errorTypes.api, requestUrl, message);
    } else {
      responseError = err;
    }

    onError(); // OPTIONAL: ERROR CALLBACK
  }

  return {
    response,
    responseError,
  };
};

/**
 * API - GET REQUEST
 * Handles async GET Requests using Axios
 * @param {string} url Url for the Request
 * @param {object} options Additional configuration options or post data. Ex: { headers: {...} }
 * @param {boolean} requiresAuth Determines whether authentication is a requirement for an endpoint
 * @param {function} onSuccess Event to fire onSuccess
 * @param {function} onError Event to fire onError
 * @returns {object} Returns the proper response and errors.
 * @example
 *
 * const {response, responseError} = await API.get('/');
 * if (!response || responseError.hasError) {
 *  ...
 * }
 *
 */
API.get = async (url, options, requiresAuth, onSuccess, onError) => API.ajax('get', url, options, requiresAuth, onSuccess, onError);

/**
 * API - POST REQUEST
 * Handles async POST Requests using Axios
 * @param {string} url Url for the Request
 * @param {object} options Additional configuration options or post data. Ex: { headers: {...}, data: {...} }
 * @param {boolean} requiresAuth Determines whether authentication is a requirement for an endpoint
 * @param {function} onSuccess Event to fire onSuccess
 * @param {function} onError Event to fire onError
 * @returns {object} Returns the proper response and errors.
 * @example
 *
 * const {response, responseError} = await API.post('/', { data: {...} });
 * if (!response || responseError.hasError) {
 *  ...
 * }
 *
 */
API.post = async (url, options, requiresAuth, onSuccess, onError) => API.ajax('post', url, options, requiresAuth, onSuccess, onError);

// PUT REQUEST
API.put = async (url, options, requiresAuth, onSuccess, onError) => API.ajax('put', url, options, requiresAuth, onSuccess, onError);

// PATCH REQUEST
API.patch = async (url, options, requiresAuth, onSuccess, onError) => API.ajax('patch', url, options, requiresAuth, onSuccess, onError);

// DELETE REQUEST
API.delete = async (url, options, requiresAuth, onSuccess, onError) => API.ajax('delete', url, options, requiresAuth, onSuccess, onError);

export default API;
