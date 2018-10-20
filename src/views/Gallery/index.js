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
      transform: scale(40) translateX(128px) translateY(12px);
    }
  }

  position: relative;
  z-index: 1001;
  margin-top: 1rem;
  display: flex;
  font-size: 1.4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  button {
    padding: 1rem;
    border: 0.3rem solid blue;
  }
  button:hover,
  button:focus,
  button:active {
    border: 0.3rem solid red;
  }

  img.zoom {
    animation: zoom 1s linear;
    /* animation-fill-mode: forwards; */
  }

  #gallerycanvas1 {
    height: 667px;
    width: 500px;
  }
`;

const ImgWrapper = styled.div`
  height: 617px;
  width: 450px;
  overflow: hidden;
`;

class Gallery extends Component {
  componentDidMount() {
    document.title = "Gallery - Infinite Mo";
    // this.canvas = document.getElementById('gallerycanvas1');
    // this.ctx = this.canvas.getContext('2d');

    // const make_base = ()=>
    // {
    //   const base_image = new Image();
    //   base_image.src = `${process.env.PUBLIC_URL}/img/mo.jpg`;
    //   base_image.onload = () =>{
    //     this.ctx.drawImage(base_image, -25, -25);
    //   };
    // };
    // make_base();
  }

  animateZoom() {
    this.setState({ zooming: true });
    setTimeout(() => {
      this.setState({ zooming: false });
    }, 1000);
  }

  animateCanvas() {
    var h = 667;
    var w = 500;
    var ox = -25;
    var oy = -25;
    var scale = 1;
    const base_image = new Image();
    base_image.src = `${process.env.PUBLIC_URL}/img/mo.jpg`;
    base_image.onload = () => {
      this.ctx.drawImage(base_image, -25, -25);
      setInterval(() => {
        if (scale < 2) {
          scale = scale + 0.1;
          this.ctx.scale(scale, scale);
        }
        // h = (h + 10);
        // w = (w + 10);
        if (oy > -400) {
          oy = oy - 10;
        }
        if (ox < 105) {
          ox = ox + 10;
        }
        // console.log(oy, ox)
        this.ctx.drawImage(base_image, ox, oy);
      }, 100);
    };
  }

  render() {
    return (
      <GalleryWrapper>
        <ImgWrapper>
          <img
            className={this.state.zooming ? "zoom" : ""}
            src={`${process.env.PUBLIC_URL}/img/mo.jpg`}
          />
        </ImgWrapper>
        <button onClick={() => this.animateZoom()} type="button">
          Next
        </button>

        {/* <canvas height="617" width="450" id="gallerycanvas1"></canvas> */}
        {/* <button onClick={()=>this.animateCanvas()} type="button">Next</button> */}
      </GalleryWrapper>
    );
  }
}

Gallery.propTypes = propTypes;

export default Gallery;
