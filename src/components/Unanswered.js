import React, { Component } from "react";
import { connect } from "react-redux";
import { _saveQuestionAnswer } from "../_DATA";
import { handleInitialData } from "../actions/shared";
import { authUser } from "../actions/authedUser";

class Unanswered extends Component {
  handleVotes = (answer, key) => {
    _saveQuestionAnswer({
      authedUser: this.props.authedUser.id,
      qid: key,
      answer: answer
    })
      .then(() => {
        return this.props.dispatch(handleInitialData());
      })
      .then(() => {
        return this.props.dispatch(
          authUser(this.props.users[this.props.authedUser.id])
        );
      });
  };

  render() {
    const { questions, authedUser, dispatch } = this.props;

    return (
      <div className="question-card">
        <ul className="questions-list">
          {Object.entries(questions).map(([key, question]) => {
            return (
              <li key={key} className="question">
                <div className="question-card--heading">
                  Would You Rather...
                </div>
                <div className="question-option">
                  <input
                    type="checkbox"
                    className="vote-checkbox"
                    onClick={() => this.handleVotes("optionOne", key)}
                  />
                  {question.optionOne.text}
                </div>
                <div className="question-option">
                  <input
                    type="checkbox"
                    className="vote-checkbox"
                    onClick={() => this.handleVotes("optionTwo", key)}
                  />
                  {question.optionTwo.text}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(Unanswered);
