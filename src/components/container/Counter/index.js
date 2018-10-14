import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const CounterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 1.4rem;
`;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(
        localStorage.getItem("mo-counter") ||
          this.getRandomInt(5000000000, 9999999999)
      )
    };
    this.count();
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  count() {
    setInterval(() => {
      this.setState(
        {
          count: this.state.count + 1
        },
        () => {
          localStorage.setItem("mo-counter", this.state.count);
        }
      );
    }, 1200);
  }

  render() {
    return (
      <CounterWrapper>
        Mo has answered {this.state.count} questions
      </CounterWrapper>
    );
  }
}

Counter.propTypes = propTypes;

export default Counter;
