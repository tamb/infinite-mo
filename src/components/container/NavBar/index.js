import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const propTypes = {};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  font-size: 1.6rem;
  display: flex;
  z-index: 1001;
  padding: 1rem 0;

  a {
    flex: 1;
    color: #ffffff;
    text-decoration: underline;
  }

  a:hover,
  a:active {
    text-decoration: none;
    color: #ffffff;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/ask">AskMo</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <audio autoPlay loop>
          <source
            src={`${process.env.PUBLIC_URL}/echo.mp3`}
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
      </StyledNav>
    );
  }
}

NavBar.propTypes = propTypes;

export default NavBar;
