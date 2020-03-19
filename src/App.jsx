import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Header from './сomponents/Header/index';
import Profile from './сomponents/Profile/index';
import Login from './сomponents/Login/index';
import News from './сomponents/News/index';
import Main from './сomponents/Main/index';


function App({ store }) {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile">
          {(store.isAuth) && <Profile />}
          {(!store.isAuth) && <Redirect to="/login" />}
        </Route>
        <Route exact path="/news" component={News} />
      </Switch>
    </div>
  );
}

export default connect(
  (state) => ({
    store: state,
  }),

)(App);

App.propTypes = {
  store: PropTypes.shape({
    isAuth: PropTypes.bool.isRequired,
  }).isRequired,
};
