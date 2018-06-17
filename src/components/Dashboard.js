import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "../actions/authedUser";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import Nav from "./Nav";
import { Redirect } from "react-router-dom";


class Dashboard extends Component {

  // component state
  state = {
    activeTab: 0
  };

  // set state to index of active tab
  handleTabChange = index => {
    this.setState({
      activeTab: index
    });
  };

  // render what will show depending on the active tab state
  renderQuestions() {
    switch (this.state.activeTab) {
      default:
      case 0:
        return (
          <Unanswered questions={this.props.unansweredQuestions}/>
        );
      case 1:
        return <Answered questions={this.props.answeredQuestions} />;
    }
  }

  render() {
    const { authedUser, unansweredQuestions, answeredQuestions } = this.props;

    // check to see if authedUser is null - if it is, redirect them to login page
    if (this.props.authedUser === null) return <Redirect to="/" />;
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1 className="dashboard-heading"> Would you rather </h1>
          <div className="authUser-profile">
            <div className="authUser-avatar">
              <img src={authedUser.avatarURL} />
            </div>
            <div className="authUser-name">{authedUser.name}</div>
          </div>
        </div>
        <Nav
          activeTab={this.state.activeTab}
          onTabChange={this.handleTabChange}
        />
        <div className="dashboard-content">{this.renderQuestions()}</div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser: authedUser ? users[authedUser.id] : null,
    // make questions object in array and filter
    unansweredQuestions: Object.entries(questions)
      .filter(([questionId, question]) => {
        return authedUser.answers[questionId] === undefined;
      })
      // use reduce to re-make object
      .reduce((accum, [questionId, question]) => {
        accum[questionId] = question;
        return accum;
      }, {}),

    answeredQuestions: Object.entries(questions)
      .filter(([questionId, question]) => {
        return authedUser.answers[questionId] !== undefined;
      })
      .reduce((accum, [questionId, question]) => {
        accum[questionId] = question;
        return accum;
      }, {})
  };
}

export default connect(mapStateToProps)(Dashboard);
