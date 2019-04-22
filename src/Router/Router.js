import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppStore from '../store/AppStore';

import Nav from './Nav/Nav'
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage/HomePage';
import StatisticPage from '../pages/StatisticPage';
import ContactDetailsPage from '../pages/ContactDetailsPage/ContactDetailsPage';
import ContactEditPage from '../pages/ContactEditPage/ContactEditPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import UserDetailsPage from '../pages/UserDetailsPage';

class Router extends Component {
  componentDidMount() {
    AppStore.userStore.loadUser()
  }

  logout = () => {
    return AppStore.userStore.logout()
  }

  render() {
    const { userName: currUserName } = AppStore.userStore.getCurrUser || {};
    const isLogin = !!currUserName;

    return (
      <HashRouter>
        <Nav isLogin={isLogin} logout={this.logout} />

        <Switch>
          {!isLogin && <Route path="/" render={() => <SignupPage UserStore={AppStore.userStore} />} />}
          <Route exact path="/" render={() => <HomePage store={AppStore} />} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/statistic" component={StatisticPage} />
          <Route path="/contact/edit/:id?" component={ContactEditPage} />
          <Route path="/contact/:id" render={()=><ContactDetailsPage UserStore={AppStore.userStore}/>} />
          <Route path="/user/:userName?" component={UserDetailsPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default observer(Router)
