var React = require('react');
var MessageList = require('../components/messages/MessageList');
var SiteFrame = require('../components/SiteFrame');
var Router = require('react-router').Router;
var Route = Router.Route;

var Routes = React.createClass({
  render: function() {
    return (
      <Router path="/" component={SiteFrame}>
        <Route path="message/:username" component={MessageList} />
      </Router>
    )
  }
});

module.exports = Routes;