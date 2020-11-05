import React, { Component } from "react";
import Card from "../CardList/Card";
import { KM_URL } from "../../../../../src/config";
import { withRouter } from "react-router-dom";
import "./CardList.scss";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      filteredCoffeeList: [],
      offset: 1,
      orderBy: "",
      show: true,
      filteredCoffeeCount: 0,
    };
  }

  LoadMoreItems = () => {
    const { offset, orderBy, filteredCoffeeList } = this.state;
    const nextOffset = offset + 1;
    let query = this.props.location.search;
    if (query === "") query = "?";
    fetch(
      `${KM_URL}/products/coffees${query}page=${nextOffset}&order_by=${orderBy}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filteredCoffeeList: [
            ...filteredCoffeeList,
            ...res.filteredCoffeeList,
          ],
          show: res.filteredCoffeeList.length < 18 ? false : true,
        });
      });
    this.setState({ offset: nextOffset });
  };

  componentDidMount() {
    fetch(`${KM_URL}/products/coffees`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          filteredCoffeeList: res.filteredCoffeeList,
          filteredCoffeeCount: res.filteredCoffeeCount,
          show: true,
        })
      );
  }

  showValue = (e) => {
    let query = this.props.location.search;
    if (query === "") query = "?";
    fetch(`${KM_URL}/products/coffees${query}order_by=${e.target.value}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          filteredCoffeeList: res.filteredCoffeeList,
          filteredCoffeeCount: res.filteredCoffeeCount,
          orderBy: e.target.value,
          offset: 1,
          show: res.filteredCoffeeList.length < 18 ? false : true,
        });
      });
  };

  componentDidUpdate(prevProps) {
    console.log(this.props.location.search);
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`${KM_URL}/products/coffees${this.props.location.search}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            filteredCoffeeCount: res.filteredCoffeeCount,
            filteredCoffeeList: res.filteredCoffeeList,
            offset: 1,
            show: res.filteredCoffeeList.length < 18 ? false : true,
          });
        });
    }
  }

  render() {
    const { filteredCoffeeList, filteredCoffeeCount } = this.state;
    return (
      <main className="CardList">
        <div className="rightBox">
          <div>
            <span>{filteredCoffeeCount}&nbsp;</span>
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
        {this.state.show && (
          <div className="btnWrapper">
            <button onClick={this.LoadMoreItems}>LOAD MORE</button>
          </div>
        )}
      </main>
    );
  }
}

export default withRouter(CardList);
