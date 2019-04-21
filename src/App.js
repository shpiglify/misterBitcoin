import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './assets/css/App.scss';

import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default observer(App);
