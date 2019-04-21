import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Formik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';

class SignupPage extends Component {

  render() {
    return (
      <div>
        <h1>Signup Page</h1>
        <img src="/assets/img/design/wallet.png" alt="bitcoin" height="100" width="100" />
        <Formik
          // Sets up our default values
          initialValues={{ name: '', email: '', password: '', city: '' }}

          // Validates our data
          // validate={values => {
          //   const errors = {};
          //   console.log(values);
          //   if (!values.email) {
          //     errors.email = 'Required';
          //   }
          //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          //     errors.email = 'You must supply a valid email address';
          //   }
          //   if (values.password.length < 8) {
          //     errors.password = 'Passwords must be at least 8 characters';
          //   }
          //   if (values.email === values.password) {
          //     errors.password = 'Your password shouldn\'t be the same as your email';
          //   }
          //   return errors;
          // }}

          // Handles our submission
          onSubmit={(values, actions) => {
            // This is where you could wire up axios or superagent
            // console.log('Submitted Values:', values);
            // Simulates the delay of a real request
            // setTimeout(() => actions.setSubmitting(false), 3 * 1000);

            // console.log('Submitted Values:', values);
            this.props.UserStore.signupUser(values.name)
              .then(() => this.props.history.push(`/`))
          }}
        >
          {formikProps => (
            <Form>
              <Field name="name" autoFocus={true} type="text" /><br />

              {/* <div>
                <Field name="city" component="select">
                  <option value="Haifa1">Haifa1</option>
                  <option value="TLV">TLV</option>
                </Field><br />

                <label htmlFor="email">Email </label>
                <Field name="email" /><br />
                {formikProps.errors.email && formikProps.touched.email && (
                  <div style={{ color: 'red' }}>
                    {formikProps.errors.email}
                  </div>
                )}

                <label htmlFor="password">Password </label>
                <Field name="password" type="password" />
                {formikProps.errors.password && formikProps.touched.password && (
                  <div style={{ color: 'red' }}>
                    {formikProps.errors.password}
                  </div>
                )}
              </div> */}
              <input type="submit" value="Submit" />&nbsp;

              <input type="reset" value="Reset"
                onClick={formikProps.handleReset}
                disabled={!formikProps.dirty || formikProps.isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withRouter(observer(SignupPage))
