import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const StyledCloud = styled.div`
  @keyframes scroll-right {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(200%);
    }
  }
  .cloud {
    background: transparent url("img/clouds.png") no-repeat;
    z-index: 3;
    position: absolute;
    background-size: contain;
    top: 20%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
    animation: scroll-right 1000s linear infinite;
  }
`;

const Cloud = () => {
  return (
    <StyledCloud>
      <div class="cloud" />
    </StyledCloud>
  );
};

Cloud.propTypes = propTypes;

export default Cloud;
