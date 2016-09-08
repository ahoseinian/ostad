'use strict';
import React from 'react';
import {observer} from 'mobx-react';
import {Card} from '../common/card.jsx';
import './style.scss';

@observer
class Login extends React.Component {

  render() {
    const {open} = this.props.store;
    return (
      <div><LoginButton {...this.props}/><LoginForm open={open}/></div>
    );
  }
}
Login.propTypes = {
  store: React.PropTypes.object
};

export default Login;

export class LoginForm extends React.Component {

  render() {
    if (!this.props.open)
      return null;
    return (
      <Card block className="m-x-3 pos-f-t">
        Login Form
      </Card>
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
    return <button className="btn btn-sm btn-info m-a-1" onClick={this.toggleLogin.bind(this)}>ورود</button>;
  }
}

LoginButton.propTypes = {
  store: React.PropTypes.object
};
