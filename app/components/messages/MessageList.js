var React = require('react');
var Link = require('react-router').Link;

var MessageList = React.createClass({
  render: function() {
    var messages = [
      {
        user: 'Alex',
        message: 'Hello'
      },
      {
        user: 'Katie',
        message: 'Just a reminder'
      },
      {
        user: 'Gus',
        message: 'PUB'
      }
    ];
    var listMessages = messages.map(function(msg) {
      return <li className="list-group-item">
        <h5>
          <Link to={"/message/" + msg.user}>{msg.user}</Link>
        </h5>
          {msg.message}
      </li>
    });
    return (
      <div className="col-sm-4">
        <ul className="list-group">
          {listMessages}
        </ul>
      </div>
    )
  }
});

module.exports = MessageList;