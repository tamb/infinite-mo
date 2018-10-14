import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const AskWrapper = styled.div`
  position: relative;
  z-index: 1001;
  margin-top: 1rem;
  display: flex;
  font-size: 1.4rem;

  fieldset {
    border: 0;
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
        <form onSubmit={() => this.generateNewQuestion()}>
          <fieldset>
            <legend>Ask Mo and he shall answer</legend>
            <legend>
              Your Question:
              <textarea />
            </legend>
          </fieldset>
          <button>Submit</button>
        </form>
      </AskWrapper>
    );
  }
}

Ask.propTypes = propTypes;

export default Ask;
