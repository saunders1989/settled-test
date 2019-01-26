import { handleActions } from 'redux-actions';

import { types } from '../actions';

const ui = handleActions(
  {
    [types.STORE_UI_CONTENT] (state, action) {
      return { ...state, content: action.payload };
    },
    [types.IS_LOADING] (state, action) {
      return { ...state, isLoading: action.payload };
    },
    [types.SET_FILTER] (state, action) {
      const { filterType, value } = action.payload;

      return {
        ...state,
        content: {
          ...state.content,
          [filterType]: {
            ...state.content[filterType],
            value
          }
        }
      };
    },
    [types.CLEAR_FILTERS] (state) {
      return {
        ...state,
        content: {
          ...state.content,
          propertyTypeFilter: {
            ...state.content.propertyTypeFilter,
            value: 'all'
          },
          propertyValueFilter: {
            ...state.content.propertyValueFilter,
            value: 'all'
          }
        }
      };
    }
  },
  {
    isLoading: true,
    content: {}
  }
);

export default ui;
