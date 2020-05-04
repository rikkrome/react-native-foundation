import { combineReducers } from 'redux';
import core from '../../modes/core/reducers';
import lifecycle from '../../modes/lifecycle/reducers';

const appReducer = combineReducers({ core, lifecycle });

export default appReducer;
