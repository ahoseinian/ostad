'use strict';
import React from 'react';
import {observer} from 'mobx-react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
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
    const floatingLabelStyle = {
      right: 0
    };
    const {open, toggle} = this.props;
    return (
      <Dialog title="فرم ورود" open={open} contentStyle={{
        width: '300px'
      }} titleClassName='text-xs-center' onRequestClose={toggle}>
        <form>
          <TextField floatingLabelText="پست الکترونیک" type="text" floatingLabelStyle={floatingLabelStyle}/>
          <br/>
          <TextField floatingLabelText="پسورد" type="password" floatingLabelStyle={floatingLabelStyle}/>
          <RaisedButton label="ورود" primary fullWidth/>
        </form>
      </Dialog>
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
