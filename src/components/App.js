import React, { Component } from "react";
import Login from "./login";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Dashboard from "./Dashboard";
import Vote from './Vote'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { questions } = this.props;
    return (
      // to do: router goes here
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route render={() =>{ return <Vote/>}} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(questions) {
  questions: questions;
}

export default connect(mapStateToProps)(App);
