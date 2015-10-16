var React = require('react');
var render = require('react-dom').render;

require('./main'); //CSS

var SiteFrame = require('./components/SiteFrame');
var Home = require('./components/Home');
var MessageMain = require('./components/messages/MessageMain');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

render(
  (
    <Router>
      <Route path="/" component={SiteFrame}>
        <IndexRoute component={Home} />
        <Route path="message/:username" component={MessageMain} />
      </Route>

    </Router>
  ), document.getElementById('main'));

