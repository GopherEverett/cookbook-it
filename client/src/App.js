import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CookbookList from "./components/CookbookList";
import Cookbook from "./components/Cookbook";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <h1>Cookbook-It</h1>
            <div>
              <div><Link to="/">All Cookbooks</Link></div>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={CookbookList} />
            <Route path="/cookbook/:id" component={Cookbook} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
