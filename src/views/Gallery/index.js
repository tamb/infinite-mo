import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const GalleryWrapper = styled.div`
  @keyframes zoom {
    from {
      transform: scale(1) translateX(0);
    }
    to {
      transform: perspective(200px) scale(40) translateX(62.5px)
        translateY(5.25px);
    }
  }

  @media screen and (min-width: 768px) {
    @keyframes zoom {
      from {
        transform: scale(1) translateX(0);
      }
      to {
        transform: scale(40) translateX(120.5px) translateY(10px);
      }
    }
  }

  position: relative;
  z-index: 1001;
  margin-top: 6rem;
  display: flex;
  font-size: 1.4rem;
  opacity: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  animation: fadein 1s ease-in;
  animation-fill-mode: forwards;

  button {
    padding: 2rem;
    border: 0.3rem solid transparent;
    border-radius: 5px;
    font-size: 2rem;
  }
  button:hover,
  button:focus,
  button:active {
    border: 0.3rem solid red;
  }

  img.zoom {
    animation: zoom 0.75s ease-in;
    animation-fill-mode: forwards;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ImgWrapper = styled.div`
  @media screen and (min-width: 768px) {
    height: 617px;
    width: 450px;
  }

  height: 320px;
  width: 233px;
  overflow: hidden;
`;

class Gallery extends Component {
  componentDidMount() {
    document.title = "Gallery - Infinite Mo";
  }

  animateZoom() {
    this.setState({ zooming: true });
    setTimeout(() => {
      this.setState({ zooming: false });
    }, 800);
  }

  render() {
    return (
      <GalleryWrapper>
        <ImgWrapper>
          <img
            className={this.state.zooming ? "zoom" : ""}
            src={`${process.env.PUBLIC_URL}/img/mo-warp.png`}
          />
        </ImgWrapper>
        <button onClick={() => this.animateZoom()} type="button">
          Next
        </button>
      </GalleryWrapper>
    );
  }
}

Gallery.propTypes = propTypes;

export default Gallery;
