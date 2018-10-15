import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

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
      index: 0
    };
  }

  componentDidMount() {
    document.title = "Ask - Infinite Mo";
  }

  generateQuestion() {
    return (
      <label>
        {this.lines[this.state.index]}
        <input type="text" value="" />
      </label>
    );
  }

  render() {
    return (
      <AskWrapper>
        <h2 className="ask ask__title">Ask Mo a Question</h2>
        <p className="ask ask__tagline">He shall answer in kind</p>
        <form
          className="ask ask__form"
          onSubmit={() => this.generateNewQuestion()}
        >
          <label>
            Your query:
            <textarea />
          </label>
          <button>Submit</button>
        </form>
      </AskWrapper>
    );
  }
}

Ask.propTypes = propTypes;

export default Ask;
