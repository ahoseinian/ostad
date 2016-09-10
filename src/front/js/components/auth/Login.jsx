'use strict';
import React from 'react';
import {observer} from 'mobx-react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './style.scss';

@observer
class Login extends React.Component {

  render() {
    const {open, toggle,} = this.props.store;
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
    const {open, toggle,} = this.props;
    return (
      <Dialog title="فرم ورود" open={open} contentStyle={{width:'300px'}} titleClassName='text-xs-center' onRequestClose={toggle}>
        <form>
          <TextField floatingLabelText="پست الکترونیک" type="text"/>
          <br/>
          <TextField floatingLabelText="پسورد" type="password"/>
        </form>
      </Dialog>
    );
  }
}
LoginForm.propTypes = {
  open: React.PropTypes.bool,
  toggle: React.PropTypes.func,
};

export const LoginButton = ({toggle}) => {
  return <FlatButton onTouchTap={toggle} label="ورود"/>;
};

LoginButton.propTypes = {
  toggle: React.PropTypes.func
};
