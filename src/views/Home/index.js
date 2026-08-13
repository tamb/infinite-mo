import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import InfinityLogo from "../../components/presentational/InfinityLogo";
import { playAudio } from "../../audio";

const propTypes = {};

const EnterWrapper = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  button {
    padding: 2rem 4rem;
    border: 0.3rem solid transparent;
    border-radius: 5px;
    font-size: 2.4rem;
    font-family: "Aldrich", sans-serif;
    cursor: pointer;
    opacity: 0;
    animation: fadein 2s ease-in;
    animation-fill-mode: forwards;
  }

  button:hover,
  button:focus,
  button:active {
    border: 0.3rem solid red;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: sessionStorage.getItem("mo-entered") === "true"
    };
  }

  componentDidMount() {
    document.title = "Infinite Mo";
  }

  handleEnter() {
    sessionStorage.setItem("mo-entered", "true");
    playAudio();
    this.setState({ entered: true });
  }

  render() {
    if (!this.state.entered) {
      return (
        <EnterWrapper>
          <button type="button" onClick={() => this.handleEnter()}>
            Enter
          </button>
        </EnterWrapper>
      );
    }

    return (
      <header>
        <InfinityLogo />
        <h1>Infinite Mo</h1>
        <h2>there's only one</h2>
      </header>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
