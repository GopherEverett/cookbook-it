import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CookbookList from "./components/CookbookList";
import Cookbook from "./components/Cookbook";
import Recipe from "./components/Recipe";
import Ingredient from "./components/Ingredient"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Cookbook-It</h1>
            <div>
                <Link to="/">
                  <h2>All Cookbooks</h2>
                </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={CookbookList} />
            <Route path="/cookbook/:id" component={Cookbook} />
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/ingredient/:id" component={Ingredient} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
