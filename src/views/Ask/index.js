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

  .ask__question {
    animation: fadein 1s ease-in;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 90%;
  }

  .ask__choices {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    padding: 1rem 2rem;
    border: 0.3rem solid transparent;
    border-radius: 5px;
    font-size: 1.4rem;
    cursor: pointer;
  }

  button:hover,
  button:focus,
  button:active {
    border: 0.3rem solid red;
  }

  textarea,
  input[type="text"] {
    width: 100%;
    min-width: 250px;
    min-height: 80px;
    font-size: 1.4rem;
    padding: 0.5rem;
  }

  input[type="text"] {
    min-height: auto;
  }
`;

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: "query",
      query: "",
      index: 0,
      answer: "",
      questions: QUESTIONS_ARR
    };
  }

  componentDidMount() {
    document.title = "Ask - Infinite Mo";
    this.setState({ questions: shuffle([...QUESTIONS_ARR]) });
  }

  handleQuerySubmit(e) {
    e.preventDefault();
    if (!this.state.query.trim()) {
      return;
    }
    this.setState({ phase: "wizard", index: 0, answer: "" });
  }

  advanceQuestion() {
    const nextIndex = this.state.index + 1;
    if (nextIndex >= this.state.questions.length) {
      this.setState({ phase: "done", index: nextIndex, answer: "" });
    } else {
      this.setState({ index: nextIndex, answer: "" });
    }
  }

  handleChoice(choice) {
    this.advanceQuestion();
  }

  handleTextAnswer(e) {
    e.preventDefault();
    if (!this.state.answer.trim()) {
      return;
    }
    this.advanceQuestion();
  }

  renderQueryForm() {
    return (
      <form className="ask ask__form" onSubmit={e => this.handleQuerySubmit(e)}>
        <label>
          Your query:
          <textarea
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderWizardQuestion() {
    const q = this.state.questions[this.state.index];

    return (
      <div className="ask ask__question">
        <p>{q.question}</p>
        {q.choices ? (
          <div className="ask__choices">
            {q.choices.map(c => (
              <button
                key={c}
                onClick={() => this.handleChoice(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>
        ) : (
          <form onSubmit={e => this.handleTextAnswer(e)}>
            <input
              type="text"
              value={this.state.answer}
              onChange={e => this.setState({ answer: e.target.value })}
            />
            <button type="submit">Next</button>
          </form>
        )}
      </div>
    );
  }

  renderDone() {
    return (
      <div className="ask ask__question">
        <p>
          Mo has received your question: &ldquo;
          {this.state.query}
          &rdquo;
        </p>
        <p>He shall answer in kind.</p>
      </div>
    );
  }

  render() {
    return (
      <AskWrapper>
        <h2 className="ask ask__title">Ask Mo a Question</h2>
        <p className="ask ask__tagline">He shall answer in kind</p>
        {this.state.phase === "query" && this.renderQueryForm()}
        {this.state.phase === "wizard" && this.renderWizardQuestion()}
        {this.state.phase === "done" && this.renderDone()}
      </AskWrapper>
    );
  }
}

Ask.propTypes = propTypes;

export default Ask;
