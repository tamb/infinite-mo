import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const StyledUniverse = styled.div`
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Universe = props => {
  return (
    <StyledUniverse>
      Universe
      {props.children}
    </StyledUniverse>
  );
};

Universe.propTypes = propTypes;

export default Universe;
