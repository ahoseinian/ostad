'use strict';
import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Icon from '../common/icon.jsx';

const styles = {
  dialog: {
    width: '300px'
  },
  textField: {
    right: 0
  }
};

export default class SaveLink extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      disabled: true
    };
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const {open, disabled} = this.state;
    const linkIcon = <Icon name="link"/>;

    return (
      <div>
        <MenuItem onTouchTap={this.toggle.bind(this)} rightIcon={linkIcon} className="text-primary">ثبت نام کاربری برای اخذ لینک</MenuItem>
        <Dialog title="نام کاربری" open={open} contentStyle={styles.dialog} titleClassName='text-xs-center' onRequestClose={this.toggle.bind(this)}>
          <TextField floatingLabelText="نام کاربری" type="text" floatingLabelStyle={styles.textField} ref={(ref) => this.email = ref}/>
          <RaisedButton label="ذخیره" primary fullWidth disabled={disabled}/>
        </Dialog>
      </div>
    );
  }
}
