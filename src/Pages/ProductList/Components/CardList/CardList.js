import React, { Component } from "react";
import Card from "../CardList/Card";
import { KM_URL } from "../../../../../src/config";
import { withRouter } from "react-router-dom";
import "./CardList.scss";

// let PAGE = 0;

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      filteredCoffeeList: [],
      offset: 0,
    };
  }

  LoadMoreItems = () => {
    const LIMIT = 10;
    const nextOffset = LIMIT + this.state.offset;
    fetch(`/${KM_URL}?page=${nextOffset}}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ filteredCoffeeList: res.filteredCoffeeList });
      });
    this.setState({ offset: nextOffset });
  };

  componentDidMount() {
    fetch(`${KM_URL}/products/coffees`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ filteredCoffeeList: res.filteredCoffeeList })
      );
  }

  showValue = (e) => {
    fetch(`${KM_URL}/products/coffees?order_by=${e.target.value}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ filteredCoffeeList: res.filteredCoffeeList })
      );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`${KM_URL}/products/coffees${this.props.location.search}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ filteredCoffeeList: res.filteredCoffeeList });
        });
    }
  }

  render() {
    const { filteredCoffeeList } = this.state;
    return (
      <main className="CardList">
        <div className="rightBox">
          <div>
            <span>100 &nbsp;</span>
            <span>coffees</span>
          </div>
          <div className="rightText">
            <label className="boldName">Sort</label>
            <select onChange={this.showValue}>
              <option value="popularity">Most Popular</option>
              <option value="new">New</option>
              <option value="price">Highest Price</option>
              <option value="-price">Lowest Price</option>
            </select>
          </div>
        </div>
        <div className="listSection">
          {filteredCoffeeList.map((product) => {
            return (
              <Card
                id={product.id}
                img={product.image_url}
                taste={product.coffees.taste}
                company={product.company}
                name={product.name}
                price={product.price}
                key={product.id}
              />
            );
          })}
        </div>
        <div className="btnWrapper">
          <button onClick={this.LoadMoreItems}>LOAD MORE</button>
        </div>
      </main>
    );
  }
}

export default withRouter(CardList);
