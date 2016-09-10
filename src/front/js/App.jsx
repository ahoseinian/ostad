import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory,} from 'react-router';
import Home from './components/Home.jsx';
import {About} from './components/About.jsx';
import Nav from './components/nav/Nav.jsx';
import DevTools from 'mobx-react-devtools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({fontFamily: 'Yekan', isRtl: true});
class App extends Component {
  render() {
    return (
      <div>
        <DevTools/>
        <Nav/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
  history: React.PropTypes.object,
};

render((
  <MuiThemeProvider muiTheme={muiTheme}>

    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'));
