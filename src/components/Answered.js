import React, { Component } from "react";

export default class Questions extends Component {
  render() {
    const { questions } = this.props;

    return (
      <div className="question-card">
        <ul className="questions-list">
          {Object.entries(questions).map(([key, question]) => {
            return (
              <li key={key} className="question">
                <div className="question-card--heading">
                  Would You Rather...
                </div>
                <div className="question-option">{question.optionOne.text}</div>
                <div className="question-option">{question.optionTwo.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
