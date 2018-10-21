import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { shuffle } from "../../utils";

const propTypes = {};

const QUESTIONS_ARR = [
  {
    question: "Why are you asking this question again?",
    choices: null
  },
  {
    question: "What's your sex?",
    choices: ["Male", "Female"]
  },
  {
    question: "So are you sure want Mo to answer?",
    choices: ["Yes, I'm sure", "Acutally, maybe not"]
  },
  {
    question: "Before we continue, click this button",
    choices: ["Just a harmless button"]
  },
  {
    question: "What was the last thing you saw before this question?",
    choices: null
  },
  {
    question: "What was the last thing you ate?  Just checking",
    choices: null
  }
];

const AskWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  top: 1rem;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  .ask {
    opacity: 0;
  }
  .ask__title {
    animation: fadein 2s ease-in;
    animation-fill-mode: forwards;
  }
  .ask__tagline {
    animation: fadein 2s ease-in 1.5s;
    animation-fill-mode: forwards;
  }
  .ask__form {
    animation: fadein 2s ease-in 1s;
    animation-fill-mode: forwards;
  }
`;

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      questions: QUESTIONS_ARR
    };
  }

  componentDidMount() {
    document.title = "Ask - Infinite Mo";
    this.setState({ questions: shuffle(this.state.questions) });
  }

  generateQuestion(e) {
    e.preventDefault();
    const q = this.state.questions[this.state.index];
    return (
      <div>
        <label>
          {q.question}
          {q.choices ? (
            q.choices.map(c => (
              <button
                onClick={() => this.generateQuestion()}
                type="button"
                className=""
              >
                {c}
              </button>
            ))
          ) : (
            <input type="text" className="" />
          )}
        </label>
      </div>
    );
  }

  render() {
    return (
      <AskWrapper>
        <h2 className="ask ask__title">Ask Mo a Question</h2>
        <p className="ask ask__tagline">He shall answer in kind</p>
        <form
          className="ask ask__form"
          onSubmit={e => this.generateQuestion(e)}
        >
          <label>
            Your query:
            <textarea />
          </label>
          <button type="submit">Submit</button>
        </form>
      </AskWrapper>
    );
  }
}

Ask.propTypes = propTypes;

export default Ask;
