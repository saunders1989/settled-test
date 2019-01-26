import { handleActions } from 'redux-actions';

import { types } from '../actions';

const properties = handleActions(
  {
    [types.STORE_PROPERTIES] (state, action) {
      return { ...state, content: action.payload };
    },
  },
  {
    content: {}
  }
);

export default properties;
