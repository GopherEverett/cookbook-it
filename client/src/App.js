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
          <div className='navbar'>
            <h1>Cookbook-It</h1>
            <div>
              <Link to="/" className="dumb">
                <h1>All Cookbooks</h1>
              </Link>
            </div>
          </div>

          <Switch>
            <div className="main">
              <Route exact path="/" component={CookbookList} />
              <Route path="/cookbook/:id" component={Cookbook} />
              <Route path="/recipe/:id" component={Recipe} />
              <Route path="/ingredient/:id" component={Ingredient} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
