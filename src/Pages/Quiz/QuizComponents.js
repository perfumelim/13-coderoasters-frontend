import React, { Component } from "react";
import "./QuizComponents.scss";

class QuizComponents extends Component {
  render() {
    const { id, title, img, cards, contents } = this.props;
    return (
      <div className="QuizComponents">
        <div className="quizHeader">
          <div className="questionArea">
            <p>
              <span>{id} of 4</span>
            </p>
            <h1>{title}</h1>
          </div>
          <img alt="img" src={img} />
        </div>
        <div className="answerArea">
          {cards.map((cards, id) => (
            <div
              className="answerCard"
              key={id}
              onClick={() => this.props.handleAnswer(cards.title)}
            >
              <h4>{cards.title}</h4>
              <p>{cards.content}</p>
            </div>
          ))}
        </div>
        <div className="infosArea">
          {contents.map((contents, id) => (
            <div className="infos" key={id}>
              <h3>{contents.title}</h3>
              <p>{contents.contents}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default QuizComponents;
