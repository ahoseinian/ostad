'use strict';
import React from 'react';
import {observer} from 'mobx-react';

@observer
class Login extends React.Component {

  render() {
    const {open} = this.props.store;
    return (
      <div><LoginButton {...this.props}/><LoginForm open={open}/></div>
    );
  }

}

export default Login;

export class LoginForm extends React.Component {

  render() {
    if (!this.props.open)
      return null;
    return (
      <div>
        Login Form
      </div>
    );
  }
}
LoginForm.propTypes = {
  open: React.PropTypes.bool
};

export class LoginButton extends React.Component {
  toggleLogin() {
    this.props.store.toggle();
  }
  render() {
    return <button className="btn btn-link" onClick={this.toggleLogin.bind(this)}>ورود</button>;
  }
}

LoginButton.propTypes = {
  store: React.PropTypes.object
};
