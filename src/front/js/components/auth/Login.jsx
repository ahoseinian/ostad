'use strict';
import React from 'react';
import {observer} from 'mobx-react';
// import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Icon from '../common/icon.jsx';
import './style.scss';

@observer
class Login extends React.Component {

  render() {
    const {toggle, user, open} = this.props.store;
    return (
      <div><LoginButton toggle={toggle} user={user}/><LoginForm open={open} toggle={toggle}/></div>
    );
  }
}
Login.propTypes = {
  store: React.PropTypes.object,
  user:React.PropTypes.object
};

export default Login;

export class LoginForm extends React.Component {

  render() {
    // const floatingLabelStyle = {
    //   right: 0
    // };
    const {open, toggle} = this.props;
    return (
      <Dialog title="فرم ورود" open={open} contentStyle={{
        width: '300px'
      }} titleClassName='text-xs-center' onRequestClose={toggle}>
        {/* <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField floatingLabelText="پست الکترونیک" type="text" floatingLabelStyle={floatingLabelStyle} ref={(ref)=>this.email = ref}/>
          <br/>
          <TextField floatingLabelText="پسورد" type="password" floatingLabelStyle={floatingLabelStyle}/>
          <RaisedButton label="ورود" primary fullWidth type="submit"/>
        </form> */}
        <RaisedButton label="ورود با گوگل" primary fullWidth href="/auth/google" icon={<Icon name="google" />}/>
      </Dialog>
    );
  }
}
LoginForm.propTypes = {
  open: React.PropTypes.bool,
  toggle: React.PropTypes.func,
};

export const LoginButton = ({toggle, user}) => {
  if (user) return <FlatButton href="/auth/logout" label="خروج"/>;
  return <FlatButton onTouchTap={toggle} label="ورود"/>;
};

LoginButton.propTypes = {
  toggle: React.PropTypes.func,
  user: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired
};
