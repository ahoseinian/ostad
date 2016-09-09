'use strict';
import React from 'react';
import {observer} from 'mobx-react';
import Modal from '../common/Modal.jsx';
import './style.scss';

@observer
class Login extends React.Component {

  render() {
    const {open, toggle} = this.props.store;
    return (
      <div><LoginButton toggle={toggle}/><LoginForm toggle={toggle} open={open}/></div>
    );
  }
}
Login.propTypes = {
  store: React.PropTypes.object
};

export default Login;

export class LoginForm extends React.Component {

  render() {
    const {open, toggle} = this.props;
    if (!open)
      return null;
    return (
      <Modal toggle={toggle} title="فرم ورود">
        Login Form
      </Modal>
    );
  }
}
LoginForm.propTypes = {
  open: React.PropTypes.bool,
  toggle: React.PropTypes.func
};

export const LoginButton = ({toggle}) => {
  return <button className="btn btn-outline-info  m-a-1" onClick={toggle}>ورود</button>;
};

LoginButton.propTypes = {
  toggle: React.PropTypes.func
};
