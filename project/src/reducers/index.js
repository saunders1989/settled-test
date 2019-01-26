import { combineReducers } from 'redux';

import ui from './ui';
import properties from './properties';

const reducers = combineReducers({
  ui,
  properties
});

export default reducers;
