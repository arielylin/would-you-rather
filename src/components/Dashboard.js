import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "../actions/authedUser";
import Questions from "./Questions";
import Nav from "./Nav";
class Dashboard extends Component {
  //to do: check to see if user is logged in in componentDidMount.  If not, redirect the user to the login page

  // component state for tracking active tab
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
        return <Questions questions={this.props.unansweredQuestions} />;
      case 1:
        return <Questions questions={this.props.answeredQuestions} />;
    }
  }

  render() {
    const { authedUser, unansweredQuestions, answeredQuestions } = this.props;

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

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser: authedUser,
    unansweredQuestions: Object.entries(questions)
      .filter(([questionId, question]) => {
        return authedUser.answers[questionId] === undefined;
      })
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

//to do: take questions out of state and filter to show unanswered and answered

export default connect(mapStateToProps)(Dashboard);
