import { handleActions } from 'redux-actions';

import { types } from '../actions';

const ui = handleActions(
  {
    [types.STORE_UI_CONTENT] (state, action) {
      return { ...state, content: action.payload };
    },
    [types.IS_LOADING] (state, action) {
      return { ...state, isLoading: action.payload };
    }
  },
  {
    isLoading: true,
    content: {}
  }
);

export default ui;
