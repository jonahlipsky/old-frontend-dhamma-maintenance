import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.jsx';
import configuredStore from './store/store'

import { getUsers } from './actions/user_actions';
import { getAllUsers } from './util/graphql_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configuredStore()

  window.getUsers = getUsers
  window.getAllUsers = getAllUsers
  window.dispatch = store.dispatch

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
})
