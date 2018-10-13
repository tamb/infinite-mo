import React, { Component } from "react";
import { styled } from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Universe from "./components/presentational/Universe";
import Stars from "./components/presentational/Stars";
import Cloud from "./components/presentational/Cloud";
import InfinityLogo from "./components/presentational/InfinityLogo";

class App extends Component {
  render() {
    return (
      <Router>
        <Universe>
          <Stars />
          <Cloud />
          <header>
            <InfinityLogo />
            <h1>Infinite Mo</h1>
            <h2>there's only one</h2>
          </header>
        </Universe>
      </Router>
    );
  }
}

export default App;

// <Route exact path="/" component={Home} />
// <Route path="/about" component={About} />
// <Route path="/topics" component={Topics} />
