var React = require('react');

var MessageDisplay = React.createClass({
  render: function() {
    var username = this.props.username;
    console.log('user: ' + username);
    return (
      <div className="col-sm-8">
        <h4>{username}</h4>
        <hr />
        test
      </div>
    )
  }
});

module.exports = MessageDisplay;
