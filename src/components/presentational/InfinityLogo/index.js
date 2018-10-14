import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LogoWrapper = styled.div`
  opacity: 0;

  svg {
    height: 25px;
    width: 50px;
    margin-bottom: -8px;
  }
`;

const propTypes = {};

const InfinityLogo = () => {
  return (
    <LogoWrapper className="fadein-logo">
      <svg
        class="logo-header-canvas"
        style="background:transparent;position:relative;"
        viewBox="0 0 100 100"
      >
        <g style="stroke:#fff;stroke-opacity:1;fill:#fff;fill-opacity:1">
          <path
            class="logo-header-path"
            d="M39.213,35.87c-7.814-7.814-20.53-7.814-28.343,0C7.085,39.654,5,44.688,5,50.041s2.085,10.387,5.87,14.171  c3.785,3.785,8.818,5.87,14.172,5.87c5.353,0,10.386-2.085,14.171-5.87L64.04,39.385l0.136-0.128  c5.945-5.945,15.62-5.944,21.565,0.001c2.88,2.881,4.466,6.71,4.466,10.783c0,4.072-1.586,7.903-4.466,10.783  c-2.879,2.879-6.71,4.465-10.782,4.465c-4.074,0-7.902-1.586-10.781-4.465l-5.671-5.653c-0.938-0.937-2.454-0.937-3.392,0  c-0.936,0.938-0.936,2.454,0,3.393l6.067,6.043l0.011-0.001c3.733,3.536,8.603,5.477,13.766,5.477c5.354,0,10.387-2.085,14.171-5.87  C92.916,60.428,95,55.395,95,50.041s-2.084-10.387-5.87-14.171C85.346,32.084,80.313,30,74.959,30c-4.995,0-9.714,1.816-13.352,5.09  l-0.026-0.024L35.824,60.824c-2.881,2.879-6.71,4.465-10.783,4.465c-4.073,0-7.903-1.586-10.783-4.465  c-2.879-2.88-4.466-6.711-4.466-10.785c0-4.073,1.585-7.903,4.466-10.783c5.946-5.945,15.621-5.944,21.566,0.001l5.713,5.722  c0.938,0.935,2.453,0.935,3.392-0.001c0.937-0.937,0.937-2.453,0-3.391L39.213,35.87z"
          />
        </g>
      </svg>
    </LogoWrapper>
  );
};

InfinityLogo.propTypes = propTypes;

export default InfinityLogo;
