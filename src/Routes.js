import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Quiz from "./Pages/Quiz/Quiz"; 추후 작업 예정
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Navbar from "../src/Components/Navbar/Navbar";
import Account from "../src/Pages/Account/Account";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Quiz} /> */}
          <Route exact path="/Login" component={Login} />
          <Route exact path="/ProductList" component={ProductList} />
          <Route exact path="/ProductDetails/:id" component={ProductDetails} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
