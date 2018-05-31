import React, { Component } from 'react';
import Login from './login'
import { connect } from 'react-redux'
import {handleInitialData} from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
       <Login/>
      </div>
    );
  }
}

export default connect()(App);
