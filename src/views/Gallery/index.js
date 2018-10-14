import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {};

const GalleryWrapper = styled.div`
  position: relative;
  z-index: 1001;
  margin-top: 1rem;
  display: flex;
  font-size: 1.4rem;
`;

class Gallery extends Component {
  componentDidMount() {
    document.title = "Gallery - Infinite Mo";
  }
  render() {
    return (
      <GalleryWrapper>
        <img src="img/mo.jpg" />
      </GalleryWrapper>
    );
  }
}

Gallery.propTypes = propTypes;

export default Gallery;
