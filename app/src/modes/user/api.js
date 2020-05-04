// USER API
//

import API from '../../services/axios';
import { ERROR_API, ERROR_AUTH } from '../error/constants';
// import getMobileAuth from '../../utils/helpers/getMobileAuth';

const MOBILE_URL = 'https://...';

export const test = '';

export const postUserLoginAPI = async (data) => {
  let payload = null;
  let payloadError = {};
  const url = `${MOBILE_URL}/login`;

  // const headers = await getMobileAuth();

  const options = {
    // headers,
    data,
  };

  try {
    // const { response, responseError } = await API.post(url, options, false);
    /** TODO
     * TEST SETUP
     */
    const responseError = {};
    const response = { success: true, accessToken: '12345' };
    // ! ----
    if (responseError.hasError) throw responseError;
    if (!response || !response.success) throw API.error(ERROR_AUTH, url, 'AUTH: SIGN-IN FAILED');

    payload = response;
  } catch (err) {
    payloadError = err;
  }

  return {
    payload,
    payloadError,
  };
};
