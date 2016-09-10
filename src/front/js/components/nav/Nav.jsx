import React from 'react';
import AppBar from 'material-ui/AppBar';
import {IndexLink, Link,} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const Nav = () => (
  <AppBar iconElementRight={< DrawerSimpleExample />}/>
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
        <Drawer open={this.state.open} openSecondary={true}>
          <AppBar title="Ostad" iconElementLeft={ToggleButton}/>
          <Link to="/about">
            <MenuItem>Menu Item 2</MenuItem>
          </Link>
          <IndexLink to="/">
            <MenuItem>Menu Item</MenuItem>
          </IndexLink>
        </Drawer>
      </div>
    );
  }
}
