import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "./Pages/Quiz/Quiz";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/ProductList" component={ProductList} />
          <Route exact path="/ProductDetails/:id" component={ProductDetails} />
          <Route exact path="/:quizNums" component={Quiz} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
