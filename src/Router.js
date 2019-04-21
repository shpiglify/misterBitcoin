import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';

// MAIN STORE
import AppStore from './store/AppStore';

// PAGES
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';
import SignupPage from './pages/SignupPage/SignupPage';
import UserDetailsPage from './pages/UserDetailsPage';

class Router extends Component {
  componentDidMount() {
    AppStore.userStore.loadUser()
  }

  render() {
    var currUserName = (AppStore.userStore.getCurrUser) ? AppStore.userStore.getCurrUser.name : '';
    var isLogin = currUserName ? true : false;
    return (
      <HashRouter>
        <nav className="nav-menu">
          <ul>
            {isLogin ? (
              <div>
                <NavLink exact className="nav-link" to="/"
                  activeClassName="activeRoute">Home</NavLink>
                <NavLink className="nav-link" to="/contact"
                  activeClassName="activeRoute">Contacts</NavLink>
                <NavLink className="nav-link" to="/statistic"
                  activeClassName="activeRoute">Statistic</NavLink>
                <NavLink className="nav-link" to="/signup"
                  activeClassName="activeRoute">Sign Up</NavLink>
                <NavLink className="nav-link" to="/user"
                  activeClassName="activeRoute">Profile</NavLink>
              </div>
            ) : (
                <div>
                  <NavLink className="nav-link" to="/"
                    activeClassName="activeRoute">Sign Up</NavLink>
                </div>
              )
            }
          </ul>
        </nav>

        <Switch>
          {!isLogin && <Route path="/" render={() => <SignupPage UserStore={AppStore.userStore} />} />}
          <Route exact path="/" render={() => <HomePage store={AppStore} />} />
          <Route exact path="/signup" render={() => <SignupPage UserStore={AppStore.userStore} />} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/statistic" component={StatisticPage} />
          <Route path="/contact/edit/:id?" component={ContactEditPage} />
          <Route path="/contact/:id" component={ContactDetailsPage} />
          <Route path="/user/:name?" component={UserDetailsPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default observer(Router) 
