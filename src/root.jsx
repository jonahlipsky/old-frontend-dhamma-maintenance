import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/app.jsx';

export default ({ store }) => {
  return(
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  )
};
