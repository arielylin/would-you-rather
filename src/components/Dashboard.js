import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "../actions/authedUser";
import Questions from "./Questions";

class Dashboard extends Component {
  //to do: check to see if user is logged in in componentDidMount.  If not, redirect the user to the login page

  render() {
    const { authedUser, unansweredQuestions } = this.props;
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

        <Questions questions={unansweredQuestions} />
        {/* todo: pass the props to render to questions component. make sure to deconstruct above*/}
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
      }, {})

    // answeredQuestions:
  };
}

//to do: take questions out of state and filter to show unanswered and answered

export default connect(mapStateToProps)(Dashboard);

[1, 2, 4].reduce((accum, num) => {
  return accum + num;
}, 0);
