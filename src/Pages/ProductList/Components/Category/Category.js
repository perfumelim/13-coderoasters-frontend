import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AsideItems from "./AsideItems";
import "./Category.scss";

class Category extends Component {
  resetAllItems = () => {
    this.props.history.push("/coffee");
  };

  render() {
    return (
      <aside className="Category">
        <div className="leftBox">
          <span className="boldName">Filter</span>
          <span onClick={this.resetAllItems} className="clearBtn">
            Clear
          </span>
        </div>
        <AsideItems />
      </aside>
    );
  }
}

export default withRouter(Category);
