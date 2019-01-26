import { createActions } from 'redux-actions';

import { ui } from './ui';
import { properties } from './properties';

const types = Object.assign({},
  ui,
  properties
);

const actions = createActions(
  ...Object.keys(types).map(type => types[type])
);

export default actions;
export { types };
