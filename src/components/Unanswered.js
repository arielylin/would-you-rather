import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import Vote from './Vote'


class Unanswered extends Component {
  render() {
    const { questions } = this.props;
    console.log({questions})
    return (
      <div className="question-card">
        <ul className="questions-list">
          {Object.entries(questions).map(([key, question]) => {
            return (
              <Link to={`questions/${key}`} render={() => { return <Vote questions={questions}/>}}>
              <li key={key} className="question">
                <div className="question-card--heading">
                  Would You Rather...
                </div>
                <div className="question-option">{question.optionOne.text}</div>
                <div className="question-option">{question.optionTwo.text}</div>
              </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect()(Unanswered);
