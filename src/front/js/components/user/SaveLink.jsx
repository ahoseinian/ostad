'use strict';
import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Icon from '../common/icon.jsx';
import request from 'superagent';

const styles = {
  dialog: {
    width: '300px'
  },
  textField: {
    right: 0
  }
};
const lang = {
  error: 'نام کاربری تکراری است',
  hint: 'حداقل ۵ کاراکتر'
};

export default class SaveLink extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      disabled: true,
      error: false
    };
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  handleChange(e) {
    let username = e.target.value;
    if (username.length < 5)
      return this.setState({disabled: true});
    request.get('/api/user/username').query({username}).end((err, r) => {
      if (err) {
        username = null;
      } else if (r.body != 0) {
        this.setState({error: true});
      } else {
        this.setState({disabled: false});
      }

    });
  }
  render() {
    const {open, disabled, error} = this.state;
    const linkIcon = <Icon name="link"/>;
    const errorStr = error ? lang.error : false;
    return (
      <div>
        <MenuItem onTouchTap={this.toggle.bind(this)} rightIcon={linkIcon} className="text-primary">ثبت نام کاربری برای اخذ لینک</MenuItem>
        <Dialog title="نام کاربری" open={open} contentStyle={styles.dialog} titleClassName='text-xs-center' onRequestClose={this.toggle.bind(this)}>
          <TextField
            floatingLabelText="نام کاربری"
            type="text"
            errorText={errorStr}
            hintText={lang.hint}
            onChange={this.handleChange.bind(this)}
            floatingLabelStyle={styles.textField}
            ref={(ref) => this.input = ref}/>
          <RaisedButton label="ذخیره" primary fullWidth disabled={disabled}/>
        </Dialog>
      </div>
    );
  }
}
