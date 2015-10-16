var React = require('react');
var MessageList = require('./MessageList');
var MessageDisplay = require('./MessageDisplay');

var MessageMain = React.createClass({
  render: function() {
    return (
      <div>
        <MessageList />
        <MessageDisplay username={this.props.params.username} />
      </div>
    )
  }
});

module.exports = MessageMain;
