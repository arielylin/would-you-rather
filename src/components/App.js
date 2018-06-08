import React, { Component } from "react";
import Login from "./login";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      // to do: router goes here
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
