import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import steps from './steps';
import main from './main';
import resource from './resource';

export default combineReducers({ steps, main, resource, form: formReducer });
