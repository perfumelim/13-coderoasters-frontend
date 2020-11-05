import React, { Component } from "react";
import Option from "./Option";
import { withRouter } from "react-router-dom";
import { KM_URL } from "../../../../../src/config";

class AsideItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: "",
      queryString: [],
    };
  }

  componentDidMount() {
    fetch(`${KM_URL}/products/options`)
      .then((res) => res.json())
      .then((res) => this.setState({ menuList: res }));
  }

  makeUrl = (query) => {
    this.setState(
      {
        queryString: [...this.state.queryString, query],
      },
      () => this.props.history.push(`?${this.state.queryString.join("")}`)
    );
  };

  deleteQuery = (name) => {
    const findTargetword = this.state.queryString.filter(
      (item) => item !== name
    );
    this.setState(
      {
        queryString: findTargetword,
      },
      () => this.props.history.push(`?${this.state.queryString.join("")}`)
    );
  };

  render() {
    const { menuList } = this.state;
    return (
      <div className="AsideItem">
        <div className="itemContainer">
          {menuList &&
            menuList.foundOptions.map((list) => (
              <Option
                key={list.id}
                name={list.name}
                filter_options={list.filter_options}
                makeUrl={this.makeUrl}
                deleteQuery={this.deleteQuery}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(AsideItems);
