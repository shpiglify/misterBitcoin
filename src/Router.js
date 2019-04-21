import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';

// MAIN STORE
import AppStore from './store/AppStore';

// PAGES
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';
import SignupPage from './pages/SignupPage';
import UserDetailsPage from './pages/UserDetailsPage';


class Router extends Component {

  state = {

  }

  componentDidMount() {
    AppStore.userStore.loadUser()
  }

  render() {
    var currUserName = (AppStore.userStore.getCurrUser) ? AppStore.userStore.getCurrUser.name : '';
    var isLogin = currUserName ? true : false;
    return (
      <HashRouter>
        {/* <BrowserRouter> */}

        <nav className="Nav_menu">
          <ul>
            {!isLogin &&
              <div>
                <NavLink className="Nav_link" to="/"
                  activeClassName="activeRoute">Sign Up</NavLink>
                {/* <Redirect exact to="/signup" component={SignupPage} /> */}
              </div>
            }
            {isLogin &&
              <div>
                <NavLink exact className="Nav_link" to="/"
                  activeClassName="activeRoute">Home</NavLink>
                <NavLink className="Nav_link" to="/contact"
                  activeClassName="activeRoute">Contacts</NavLink>
                <NavLink className="Nav_link" to="/statistic"
                  activeClassName="activeRoute">Statistic</NavLink>
                <NavLink className="Nav_link" to="/signup"
                  activeClassName="activeRoute">Sign Up</NavLink>
                <NavLink className="Nav_link" to="/user"
                  activeClassName="activeRoute">{currUserName}</NavLink>
              </div>
            }
          </ul>
        </nav>

        <Switch>
          {!isLogin &&
            <Route path="/"  render={() => <SignupPage UserStore={AppStore.userStore} />} />
            // {/* <Redirect exact to="/signup" component={SignupPage} /> */}
          }
          <Route exact path="/" render={() => <HomePage store={AppStore} />} />
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/signup" render={() => <SignupPage UserStore={AppStore.userStore} />} />
          {/* <Route exact path="/signup" component={SignupPage} /> */}
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/statistic" component={StatisticPage} />
          <Route path="/contact/edit/:id?" component={ContactEditPage} />
          <Route path="/contact/:id" component={ContactDetailsPage} />
          <Route path="/user/:name?" component={UserDetailsPage} />
        </Switch>

        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}

export default observer(Router) 