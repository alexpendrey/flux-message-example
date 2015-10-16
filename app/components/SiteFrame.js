var React = require('react');

var Header = require('./header/Header');
var MessageList = require('./messages/MessageList');

var SiteFrame = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <Header />
        <div className="container">
          <div className="col-sm-12">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SiteFrame;