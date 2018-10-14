import React, { Component } from "react";
import PropTypes from "prop-types";

import InfinityLogo from "../../components/presentational/InfinityLogo";

const propTypes = {};

class Home extends Component {
  render() {
    return (
      <header>
        <InfinityLogo />
        <h1>Infinite Mo</h1>
        <h2>there's only one</h2>
        <audio autoPlay loop>
          <source src="echo.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </header>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
