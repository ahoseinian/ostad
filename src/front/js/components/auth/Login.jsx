'use strict';
import React from 'react';
// import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Icon from '../common/icon.jsx';
import './style.scss';


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
        <RaisedButton label="ورود با گوگل" primary fullWidth href="/auth/google"
        icon={<Icon name="google" />}/>
      </Dialog>
    );
  }
}
LoginForm.propTypes = {
  open: React.PropTypes.bool,
  toggle: React.PropTypes.func,
};
