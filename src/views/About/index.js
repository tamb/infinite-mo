import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const AboutWrapper = styled.div`
  position: relative;
  z-index: 1001;
  margin-top: 1rem;
  display: flex;
`;

class About extends Component {
  render() {
    return <AboutWrapper>About stuff</AboutWrapper>;
  }
}

About.propTypes = propTypes;

export default About;
