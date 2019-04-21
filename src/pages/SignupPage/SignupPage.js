import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import './SignupPage.scss';

class SignupPage extends Component {
  state = {
    userName: '',
    password: '',
  }

  handleOnUserNameChange = (e) => {
    this.setState({ userName: e.target.value })
  }

  handleOnPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }
  
  handleLogin = () => {
    const { userName, password } = this.state
    const credentials = { userName, password }

    this.props.UserStore.login(credentials)
      .then(() => {
        this.props.history.push(`/`)
      })
  }

  handleSignup = () => {
    const { userName, password } = this.state
    const credentials = { userName, password }

    this.props.UserStore.signupUser(credentials)
      .then(() => {
        this.props.history.push(`/`)
      })
  }

  render = () => (
    <div className="signup-page">
      <h1>Login</h1>
      <img src="/assets/img/design/wallet.png" alt="bitcoin" height="100" width="100" />

      <form className="signup-form">
        <input onChange={this.handleOnUserNameChange} placeholder="User Name" />
        <input onChange={this.handleOnPasswordChange} type="password" placeholder="Password" />

        <div className="btn-container">
          <button className="btn-full" onClick={this.handleLogin}>Login</button>
          <button className="btn-flat" onClick={this.handleSignup}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}


export default withRouter(observer(SignupPage))
