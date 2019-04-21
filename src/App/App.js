import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.scss';

import Router from '../Router';

class App extends Component {
  render = () => (
    <div className="App flex flex-col">
      <Router />
    </div>
  );
}

export default observer(App);
