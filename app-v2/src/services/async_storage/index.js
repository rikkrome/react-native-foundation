import AsyncStorage from '@react-native-community/async-storage';
import {log, dlog} from '../../utils/helpers/log';

const lib = {};
const tag = '[async-storage] ';
// AsyncStorage Keys
lib.keys = {
  USER_AUTH: 'userAuth',
};

lib.cached = {};

lib.save = async (key, data) => {
  log(tag, 'save this [key]', key);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    lib.cached[key] = data; // object
    log(tag, 'saved ', key);
  } catch (error) {
    dlog('CODStorage Save: ', error);
  }
};

lib.get = async (key) => {
  try {
    if (lib.cached[key]) {
      // object
      log(tag, 'got cached [', key, ']'); // object
      return lib.cached[key];
    }
    const value = await AsyncStorage.getItem(key);
    lib.cached[key] = JSON.parse(value);
    log(tag, 'cache updated: Added [', key, '] : cached: ', Object.keys(lib.cached));
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    dlog(tag, 'get: ', error);
  }
  return null;
};

lib.killCache = async () => {
  try {
    lib.cached = {};
  } catch (error) {
    dlog(tag, 'killCache: error: ', error);
  }
};

lib.kill = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    if (lib.cached[key]) {
      delete lib.cached[key];
    }
    log(tag, 'kill ', key);
    log(tag, 'cache updated: removed [', key, ']: cached: ', Object.keys(lib.cached));
  } catch (error) {
    dlog(tag, 'kill: error: ', error);
  }
};

export default lib;
