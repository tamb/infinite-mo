import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { baseUrl } from "../../../baseUrl";

const propTypes = {};

const StarStyles = styled.div`
  @keyframes move-background {
    from {
      transform: scale(1) rotate(0);
    }
    to {
      transform: scale(1.33) rotate(360deg);
    }
  }
  @keyframes fadeinout {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  * {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-position: center;
  }
  .moving {
  background: transparent url("${baseUrl}img/stars.png");
    background-repeat: no-repeat;
    background-size: cover;
    animation: move-background 400s linear infinite,
      fadeinout 35s linear infinite;
    transform-origin: 50% 50%;
    opacity: 0;
  }
  .static-stars {
    background: transparent url("${baseUrl}img/stars.png");
    background-repeat: no-repeat;
    background-size: cover;
    transform: scaleX(-1);
  }
`;

const Stars = () => {
  return (
    <StarStyles>
      <div class="moving" />
      <div class="static-stars" />
    </StarStyles>
  );
};

Stars.propTypes = propTypes;

export default Stars;
