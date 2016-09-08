import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './components/Home.jsx';
import {About} from './components/About.jsx';
import Nav from './components/nav/Nav.jsx';
import DevTools from 'mobx-react-devtools';
import Login from './components/auth/Login.jsx';
import LoginStore from './stores/login';

class App extends Component {
  render() {
    return (
      <div>
        <DevTools/>
        <Nav/>
        <Login store={LoginStore}/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node
};

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
