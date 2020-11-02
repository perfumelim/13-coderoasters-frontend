import React, { Component } from "react";
import logo from "./logos.png";
import { BsSearch, BsPeopleCircle, BsBag } from "react-icons/bs";
import DropdownComponent from "./DropdownComponent";
import Blog from "./Blog";
import Learn from "./Learn";
import Shop from "./Shop";
import "./Navbar.scss";

const MENU_LIST = ["Shop", "How-To's", "Gifts", "Learn", "Blog", "About"];

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      activeId: 0,
    };
  }

  openDropdown = (id) => {
    const { activeId } = this.state;
    const isSame = activeId === id;
    this.setState({ activeId: isSame ? 0 : id });
  };

  render() {
    const { activeId } = this.state;

    return (
      <div className="Navbar">
        <div className="navigation">
          <div className="header">
            <img src={logo} alt="logo" />
            <ul>
              {MENU_LIST.map((menu, idx) => (
                <li className="navText" key={idx}>
                  <button
                    className="dropBtn"
                    onClick={() => this.openDropdown(idx + 1)}
                  >
                    {menu}
                  </button>
                </li>
              ))}
            </ul>
            <div className="iconSection">
              <button className="matchBtn">MY MATCHES</button>
              <ul>
                <li data-hover="Search" className="slideList">
                  <div>
                    <BsSearch size="25px" />
                  </div>
                </li>
                <li data-hover="Log In" className="slideList">
                  <div>
                    <BsPeopleCircle size="25px" />
                  </div>
                </li>
                <li data-hover="Cart" className="slideList">
                  <div>
                    <BsBag size="25px" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            {activeId === 1 && <Shop activeId={activeId} />}
            {activeId === 2 && <DropdownComponent activeId={activeId} />}
            {activeId === 3 && <DropdownComponent activeId={activeId} />}
            {activeId === 4 && <Learn activeId={activeId} />}
            {activeId === 5 && <Blog activeId={activeId} />}
            {activeId === 6 && <DropdownComponent activeId={activeId} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
