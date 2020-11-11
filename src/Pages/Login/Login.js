import React, { Component } from "react";
import "../Login/Login.scss";
import { Link, withRouter } from "react-router-dom";

const API = "http://10.58.4.20:8000/users/signup";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      activeId: 1,
      firstNameValue: "",
      lastNameValue: "",
      emailValue: "",
      // isEmailValid: false,(validation 구현을 위해 남겨놓은 주석입니다.)
      mobileNumValue: "",
      pwValue: "",
      // isPwValueValid: false,(validation 구현을 위해 남겨놓은 주석입니다.)
    };
  }

  changeTap = (id) => {
    this.setState({ activeId: id });
  };

  handleInputValue = (inValue) => {
    this.setState({ [inValue.target.name]: inValue.target.value });
  };
  //validation 구현을 위해 남겨놓은 주석입니다.
  // valiDateEmail = (emailValue) => {
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   if (emailValue.match(re)) {
  //     this.setState({
  //       isEmailValid: true,
  //       emailValue,
  //     });
  //   }
  // };

  handleSignUpClick = () => {
    const {
      firstNameValue,
      lastNameValue,
      emailValue,
      mobileNumValue,
      pwValue,
    } = this.state;

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstNameValue,
        last_name: lastNameValue,
        email: emailValue,
        mobile_number: mobileNumValue,
        password: pwValue,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("state", this.state);
        console.log("success message", response);
        if (response.message === "user created") {
          alert("SUCCESS SIGN UP");
          this.setState({ activeId: 2 });
        }
      });
  };

  handleLogInClick = (e) => {
    const { emailValue, pwValue } = this.state;

    fetch("http://10.58.4.20:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: pwValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "login success!") {
          alert("Login SUCCESS!");
          localStorage.setItem("token", result.token);
          this.props.history.push("/");
        }
      });
  };

  render() {
    const {
      activeId,
      firstNameValue,
      lastNameValue,
      emailValue,
      pwValue,
    } = this.state;

    return (
      <>
        {/* modal기능을 위해 남겨놓은 주석입니다 
         {this.props.isOpen ? (  */}
        <div className="Login">
          <div className="loginBox">
            <div className="btnClose">
              <button onClick={this.props.close}>
                <img src="/Images/close-button.png" alt="closebutton" />
              </button>
            </div>
            <div className="accountBox">
              <button
                className={
                  activeId === 1 ? "accountButtonLine" : "accountButton"
                }
                onClick={() => this.changeTap(1)}
              >
                Sign Up
              </button>
              <button
                className={
                  activeId === 2 ? "accountButtonLine" : "accountButton"
                }
                onClick={() => this.changeTap(2)}
              >
                Log In
              </button>
            </div>
            <div className="loginContainer">
              <div className="inputBox">
                {activeId === 1 && (
                  <>
                    <input
                      className="nameBox"
                      type="text"
                      placeholder="First Name*"
                      name="firstNameValue"
                      value={firstNameValue}
                      onChange={this.handleInputValue}
                    />
                    <input
                      className="nameBox"
                      type="text"
                      placeholder="Last Name*"
                      name="lastNameValue"
                      value={lastNameValue}
                      onChange={this.handleInputValue}
                    />
                  </>
                )}
                <input
                  className="emailBox"
                  type="text"
                  placeholder="Email*"
                  name="emailValue"
                  value={emailValue}
                  onChange={this.handleInputValue}
                />
                {activeId === 1 && (
                  <input
                    className="mobileNumBox"
                    type="text"
                    placeholder="Mobile Number*"
                    name="mobileNumValue"
                    value={this.state.mobileNumValue}
                    onChange={this.handleInputValue}
                  />
                )}
                <input
                  className="psBox"
                  type="password"
                  placeholder="Password*"
                  name="pwValue"
                  value={pwValue}
                  onChange={this.handleInputValue}
                />
              </div>
              {activeId === 1 && (
                <div className="characterCheck">8 character minimum</div>
              )}
              <button
                className="signUpButton"
                type="submit"
                name="sign"
                onClick={
                  activeId === 1
                    ? this.handleSignUpClick
                    : this.handleLogInClick
                }
              >
                {activeId === 1 ? "SIGN UP" : "LOG IN"}
              </button>
              <button>
                <div
                  class="g-signin2"
                  data-width="455"
                  data-longtitle="true"
                  data-onsuccess="onSignIn"
                ></div>
              </button>
            </div>
          </div>
        </div>
        ) : null}
      </>
    );
  }
}

export default withRouter(Login);
