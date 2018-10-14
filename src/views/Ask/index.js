import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const AskWrapper = styled.div`
  position: relative;
  z-index: 1001;
  margin-top: 1rem;
  display: flex;
`;

class Ask extends Component {
  render() {
    return <AskWrapper>Ask stuff</AskWrapper>;
  }
}

Ask.propTypes = propTypes;

export default Ask;
