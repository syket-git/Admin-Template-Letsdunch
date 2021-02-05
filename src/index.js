import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core components
import Admin from 'layouts/Admin.js';
import { Provider } from 'react-redux';
import 'assets/css/material-dashboard-react.css?v=1.9.0';
import SignIn from './views/authentication/signin/Signin';
import store from './store';
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Provider store={store}>
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('root')
);
