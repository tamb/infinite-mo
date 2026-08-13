import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const GalleryWrapper = styled.div`
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
    cursor: pointer;
  }
  button:hover,
  button:focus,
  button:active {
    border: 0.3rem solid red;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 450px;
    width: 617px;
  }

  height: 233px;
  width: 320px;
`;

const RotatedFrame = styled.div`
  transform: rotate(90deg);
  transform-origin: center center;

  @media screen and (min-width: 768px) {
    width: 450px;
    height: 617px;
  }

  width: 233px;
  height: 320px;
`;

const ZoomTarget = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: 8% 32%;
  transition: transform 0.75s ease-in;

  &.zoomed {
    transform: scale(18);
  }

  img {
    width: 100%;
    height: 100%;
    max-width: none;
    display: block;
  }
`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomed: false
    };
  }

  componentDidMount() {
    document.title = "Gallery - Infinite Mo";
  }

  animateZoom() {
    this.setState({ zoomed: true });
  }

  render() {
    return (
      <GalleryWrapper>
        <ImgWrapper>
          <RotatedFrame>
            <ZoomTarget className={this.state.zoomed ? "zoomed" : ""}>
              <img
                src={`${process.env.PUBLIC_URL}/img/mo-warp.png`}
                alt="Mo with refrigerator in background"
              />
            </ZoomTarget>
          </RotatedFrame>
        </ImgWrapper>
        <button onClick={() => this.animateZoom()} type="button">
          Zoom
        </button>
      </GalleryWrapper>
    );
  }
}

Gallery.propTypes = propTypes;

export default Gallery;
