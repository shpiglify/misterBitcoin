import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import './SignupPage.scss';

class SignupPage extends Component {
  state = {
    userName: '',
  }

  handleOnSubmit = () => {
    this.props.UserStore.signupUser(this.state.userName)
      .then(() => this.props.history.push(`/`))
  }

  handleOnUserNameChange = (e) => {
    this.setState({ userName: e.target.value })
  }

  handleOnPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  render = () => (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <img src="/assets/img/design/wallet.png" alt="bitcoin" height="100" width="100" />

      <form className="signup-form" onSubmit={this.handleOnSubmit}>
        <input onChange={this.handleOnUserNameChange} placeholder="User Name" />
        <input onChange={this.handleOnPasswordChange} placeholder="Password" />
        <input type="submit" value="Sign Up" />
      </form>

      {/* <Formik
        initialValues={{ name: '', email: '', password: '', city: '' }}
        onSubmit={(values, actions) => {
          this.props.UserStore.signupUser(values.name)
            .then(() => this.props.history.push(`/`))
        }}
      >
        {formikProps => (
          <Form>
            <Field name="name" autoFocus={true} type="text" /><br />
            <input type="submit" value="Submit" />&nbsp;
              <input type="reset" value="Reset"
              onClick={formikProps.handleReset}
              disabled={!formikProps.dirty || formikProps.isSubmitting}
            />
          </Form>
        )}
      </Formik> */}
    </div>
  );
}


export default withRouter(observer(SignupPage))
