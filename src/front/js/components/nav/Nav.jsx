import React from 'react';
import AppBar from 'material-ui/AppBar';
import {IndexLink, Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Login from '../auth/Login.jsx';
import LoginStore from '../../stores/login';
const Nav = () => (

  <AppBar iconElementRight={< DrawerSimpleExample />} iconElementLeft={< Login store = {
    LoginStore
  } />}/>
);

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
        <Drawer open={this.state.open}>
          <AppBar  iconElementLeft={ToggleButton}/>
          <IndexLink to="/">
            <MenuItem>خانه</MenuItem>
          </IndexLink>
          <Link to="/about">
            <MenuItem>درباره ما</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}
