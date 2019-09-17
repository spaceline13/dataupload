import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import steps from './steps';
import main from './main';
import resource from './resource';
import mapping from './mapping';
import validation from './validation';

export default combineReducers({ steps, main, resource, mapping, validation, form: formReducer });
