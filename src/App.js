import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

class App extends Component {
  render() {
    return (
      <AppStyles>
        <Universe>
          <Stars />
          <Cloud />
        </Universe>
        <Router>
          <div className="container">
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/ask" component={Ask} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
            </div>
            <Counter />
          </div>
        </Router>
      </AppStyles>
    );
  }
}

export default App;
