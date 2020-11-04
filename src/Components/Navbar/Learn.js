import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DropdownContent.scss";

class Learn extends Component {
  render() {
    return (
      <div className="dropdownLearn">
        <ul className="dropdownListContent">
          <li>
            <span>Sustainable Coffee</span>
          </li>
          <li>
            <Link to="/">Fair Trade Coffee</Link>
          </li>
          <li>
            <Link to="/">Organic Coffee</Link>
          </li>
        </ul>
        <ul className="dropdownListContent">
          <li>
            <span>Decaf</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default Learn;
