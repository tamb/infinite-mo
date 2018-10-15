import React, { Component } from "react";
import PropTypes from "prop-types";

import InfinityLogo from "../../components/presentational/InfinityLogo";

const propTypes = {};

class Home extends Component {
  componentDidMount() {
    document.title = "Infinite Mo";
  }
  render() {
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
