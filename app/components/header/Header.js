var React = require('react');

var MessageIcon = require('./MessageIcon');

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default" style={{minHeight: 60}}>
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 10}}>
          <div className="col-sm-12">
            <MessageIcon />
            <div className="col-sm-11">
              <input type="text" className="form-control" ref="search" />
            </div>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = Header;