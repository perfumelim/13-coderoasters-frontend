import React, { Component } from "react";
import "../Login/LoginButton.scss";
import Login from "./Login";

export default class LoginButton extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const btnStyle = {
      color: "white",
      background: "teal",
      padding: ".375rem .75rem",
      border: "1px solid teal",
      borderRadius: ".25rem",
      fontSize: "1rem",
      lineHeight: 1.5,
    };
    return (
      <>
        <button onClick={this.openModal} style={btnStyle} className="loginBtn">
          Login
        </button>
        <Login isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}
