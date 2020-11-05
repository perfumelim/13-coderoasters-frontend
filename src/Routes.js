import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import Quiz from "./Pages/Quiz/Quiz";
// import Login from "./Pages/Login/Login";
// import MyMatches from "./Pages/MyMatches/MyMatches";
// import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ProductList from "./Pages/ProductList/ProductList";
// import Quiz from "./Pages/Quiz/Quiz";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/Navbar" component={Navbar} />
          {/* <Route exact path="/Login" component={Login} /> */}
          {/* <Route exact path="/MyMatches" component={MyMatches} />
          <Route exact path="/ProductDetails/:id" component={ProductDetails} />
          <Route exact path="/ProductList" component={ProductList} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
