import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import QuizComponent from "./components/Quiz/QuizComponent";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Fragment>
      <section className="main-wrapper">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/quiz/:quizid" component={QuizComponent} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </section>
    </Fragment>
  );
}

export default App;
