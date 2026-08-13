import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const AboutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  margin-top: 1rem;
  display: flex;
  font-size: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .article__title {
    animation: fadein 2s ease-in;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .article__body {
    animation: fadein 2s ease-in 1s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
`;

class About extends Component {
  componentDidMount() {
    document.title = "About - Infinite Mo";
  }
  render() {
    return (
      <AboutWrapper>
        <article className="article">
          <h2 className="article__title">About Mo</h2>
          <div className="article__body">
            <p>Mo is all knowing.</p>
            <p>He has answered many and has answers to all.</p>
          </div>
        </article>
      </AboutWrapper>
    );
  }
}

About.propTypes = propTypes;

export default About;
