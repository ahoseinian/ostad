'use strict';
import React from 'react';
import {Link, IndexLink} from 'react-router';
import classNames from 'classnames';
import './style.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: true
    };
  }
  toggle() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    const {collapse} = this.state;
    const navClasses = classNames('navbar-toggleable-xs', {collapse: collapse});
    return (
      <nav className="navbar navbar-light navbar-fixed-top text-xs-right">
        <button className="navbar-toggler hidden-sm-up " type="button" onClick={this.toggle.bind(this)}>
          &#9776;
        </button>
        <div className={navClasses}>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <IndexLink to="/" className="nav-link" activeClassName="active">
                خانه
              </IndexLink>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" activeClassName="active">
                درباره ما
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }

}
Nav.propTypes = {
  current: React.PropTypes.number
};

export default Nav;
