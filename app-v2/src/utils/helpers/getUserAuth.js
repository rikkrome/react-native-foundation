import storage from '../../services/async_storage';
import { dlog } from './log';

const getUserAuth = async () => {
  try {
    const auth = await storage.get(storage.keys.USER_AUTH);
    if (!auth || (typeof auth === 'object' && !Object.keys(auth).length)) {
      return null;
    }
    const { accessToken } = auth;
    auth.accessToken = accessToken;
    return auth;
  } catch (error) {
    dlog('getUserAuth ', error);
  }
  return null;
};

export default getUserAuth;
