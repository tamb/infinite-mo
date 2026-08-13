import React, { Component } from "react";
import styled from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { initAudio } from "./audio";
import Universe from "./components/presentational/Universe";
import Stars from "./components/presentational/Stars";
import Cloud from "./components/presentational/Cloud";
import Counter from "./components/container/Counter";
import NavBar from "./components/container/NavBar";
import Home from "./views/Home";
import Ask from "./views/Ask";
import About from "./views/About";
import Gallery from "./views/Gallery";

const AppStyles = styled.div`
    @keyframes fadein{
    from {
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  
  color: #ffffff;
  text-align: center;


  .container{
    display: flex;
    position: relative;
  }

  header{
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    h1,h2{
      color: #ffffff;
      position: relative;
      margin: 0;
      opacity: 0;
      font-family: 'Aldrich', sans-serif;
    }
    .fadein-logo{
      animation: fadein 2s ease-in 1.5s;
      animation-fill-mode: forwards; 
    }
    }
    h1{
      font-size: 3rem;
      animation: fadein 2s ease-in;
      animation-fill-mode: forwards;

    }
    h2{
      font-size: 2rem;
      animation: fadein 2s ease-in 3s;
      animation-fill-mode: forwards;

    }
  }
`;

const PageContainer = styled.main`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 2rem;
  left: 0;
`;

class App extends Component {
  componentDidMount() {
    if (this.audioRef) {
      initAudio(this.audioRef);
      if (sessionStorage.getItem("mo-entered") === "true") {
        this.audioRef.play().catch(() => {});
      }
    }
  }

  setAudioRef = el => {
    this.audioRef = el;
    if (el) {
      initAudio(el);
    }
  };

  render() {
    return (
      <AppStyles>
        <audio ref={this.setAudioRef} loop>
          <source
            src={`${process.env.PUBLIC_URL}/echo.mp3`}
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
        <Universe>
          <Stars />
          <Cloud />
        </Universe>
        <Router>
          <div className="container">
            <NavBar />
            <PageContainer>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/ask" component={Ask} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
            </PageContainer>
            <Counter />
          </div>
        </Router>
      </AppStyles>
    );
  }
}

export default App;
