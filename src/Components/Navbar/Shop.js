import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropdownList from "./DropdownListData";
import "./DropdownContent.scss";

class Shop extends Component {
  render() {
    return (
      <div className="dropdownShop">
        <ul className="dropdownListContent">
          <li>
            <span>Coffee</span>
          </li>
          {DropdownList.shopCoffee.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to="/">{item}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="dropdownListContent">
          <li>
            <span>Equipment</span>
          </li>
          {DropdownList.shopEquipment.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to="/">{item}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="dropdownListContent">
          <li>
            <span>Cold Brew</span>
          </li>
          {DropdownList.shopColdBrew.map((item, idx) => {
            return (
              <li key={idx}>
                <Link to="/">{item}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="dropdownListContent">
          <li>
            <span>DrinkWare</span>
          </li>
          <li>
            <Link to="/">Yeti Rembler</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Shop;
