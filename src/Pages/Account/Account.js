import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Account/Account.scss";

export default class Account extends Component {
  render() {
    return (
      <div className="Account">
        <div className="title">Account</div>
        <div classNam="tapBox">
          <button className="titleTap">Details</button>
          <button className="titleTap">Addresses</button>
          <button className="titleTap">Payment</button>
        </div>
        <div className="infoBox">
          <input
            className="firsNameBox"
            type="textarea"
            placeholder="FIST NAME*"
          ></input>
          <input
            className="lastNameBox"
            type="textarea"
            placeholder="LAST NAME*"
          ></input>
          <input
            className="emailBox"
            type="textarea"
            placeholder="EMAIL*"
          ></input>
          <input
            className="mobileBox"
            type="textarea"
            placeholder="MOBILE NUMBER"
          ></input>
          <button>save</button>
        </div>
      </div>
    );
  }
}
