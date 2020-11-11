import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div>
          <span className="type">coffee</span>
          <span className="title">> All coffee</span>
        </div>
        <div>
          <p className="name">All Coffee</p>
          <p className="description">
            choose from a wide variety of coffee from the top roasters in the
            US. All coffee is
            <br /> roasted to order and shipped fresh to your door.
          </p>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
