import React, { Component } from "react";
import "../CardList/CardList.scss";
import { withRouter } from "react-router-dom";

class Card extends Component {
  render() {
    const { img, taste, company, name, price, id } = this.props;
    return (
      <div
        onClick={() => this.props.history.push(`/ProductDetails/${id}`)}
        className="cardContainer"
      >
        <div className="imgContainer">
          <img src={img} alt="product_pic" />
        </div>
        <div className="taste">
          <h2>{taste}</h2>
        </div>
        <div className="productInfo">
          <h3 className="companyName">{company}</h3>
          <h2>{name}</h2>
          <h3 className="price">{`$${price}`}</h3>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
