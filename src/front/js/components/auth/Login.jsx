'use strict';
import React from 'react';
import {observer} from 'mobx-react';
import Modal from '../common/Modal.jsx';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
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
      <Modal toggle={toggle} title="فرم ورود" sm>
        <form>
          <TextField hintText="Email Field" floatingLabelText="Email" type="text"/>
          <TextField hintText="Password Field" floatingLabelText="Password" type="password"/>
        </form>
      </Modal>
    );
  }
}
LoginForm.propTypes = {
  open: React.PropTypes.bool,
  toggle: React.PropTypes.func
};

export const LoginButton = ({toggle}) => {
  return <FlatButton onTouchTap={toggle} label="ورود"/>;
};

LoginButton.propTypes = {
  toggle: React.PropTypes.func
};
