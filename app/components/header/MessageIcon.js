var React = require('react');

var MessageIcon = React.createClass({
  render: function() {
    return (
      <div className="col-sm-1">
        <span className="glyphicon glyphicon-envelope message-read"></span>
      </div>
    )
  }
});

module.exports = MessageIcon;