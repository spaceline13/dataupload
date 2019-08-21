import { combineReducers } from 'redux';

import steps from './steps';
import upload from './upload';

export default combineReducers({ steps, upload });
