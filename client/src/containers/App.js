import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../styles/App.scss';

class App extends Component {
   handleLoginClick() {

  }

  handleLogoutClick() {

  }

  render() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
