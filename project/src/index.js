import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import sagas from './sagas';

import configureStore from './store';
import routes from './routes';

const store = configureStore();
store.runSaga(sagas);

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
};

render(<AppRouter />, document.getElementById('app'));
