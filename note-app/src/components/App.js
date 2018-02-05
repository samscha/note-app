import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetError } from '../actions';

import logo from '../assets/logo.svg';

import '../styles/css/index.css';

class App extends Component {
  componentDidMount() {
    this.resetError();
  }

  resetError = _ => {
    this.props.resetError();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //
  };
};

export default connect(mapStateToProps, { resetError })(App);
