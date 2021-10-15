import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import React from "react";
import LandingPage from "./layout/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./layout/HomePage";
import DashBoard from "./layout/DashBoard";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/landingPage" component={LandingPage} />
          <div>
            <NavbarComponent />
            <Container>
              <Route exact path="/Homepage" component={HomePage} />
              <Route exact path="/Dashboard" component={DashBoard} />
            </Container>
          </div>
        </Switch>
      </Router>
    </>
  );
}
