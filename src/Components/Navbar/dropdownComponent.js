import React, { Component } from "react";
import "./DropdownContent.scss";
import dropdown from "./DropdownData";

class DropdownComponent extends Component {
  render() {
    const { activeId } = this.props;

    return (
      <div className="dropdownHowTo">
        <ul className="dropdownShort">
          {dropdown[activeId].map((item, idx) => {
            return (
              <li key={idx} className="dropdownShortContent">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default DropdownComponent;
