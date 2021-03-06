import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {IndexLink, Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import {LoginForm} from '../user/Login.jsx';
import SaveLink from '../user/SaveLink.jsx';
import LoginStore from '../../stores/login';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {observer} from 'mobx-react';

@observer
class Nav extends React.Component {

  render() {
    const {user, toggle, open} = LoginStore;
    const loginBtn = user
      ? <RaisedButton href="/auth/logout" label="خروج"/>
      : <RaisedButton onTouchTap={toggle} label="ورود"/>;
    return (
      <Toolbar className="bg-info">
        <LoginForm open={open} toggle={toggle}/>
        <ToolbarGroup firstChild={true}>
          {loginBtn}
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={user.displayName} className="text-uppercase small" style={{
            fontSize: '0.8rem'
          }}/>
          <ToolbarSeparator/>
          <DrawerSimpleExample/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Nav;

class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({
    open: !this.state.open
  });

  render() {
    const ToggleButton = <IconButton iconClassName="fa fa-bars" onTouchTap={this.handleToggle}/>;
    return (
      <div>
        {ToggleButton}
        <Drawer open={this.state.open} docked={false} openSecondary={true} onRequestChange={this.handleToggle}>
          <AppBar iconElementLeft={ToggleButton}/>

          <IndexLink to="/">
            <MenuItem onTouchTap={this.handleToggle}>خانه</MenuItem>
          </IndexLink>
          <Link to="/about">
            <MenuItem onTouchTap={this.handleToggle}>درباره ما</MenuItem>
          </Link>
          <SaveLink/>
        </Drawer>
      </div>
    );
  }
}
