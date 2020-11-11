import React, { Component } from "react";
import "./Cart.scss";

export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      productSummary: {},
    };
  }

  //   componentDidMount() {
  //     fetch("/Data/ProductDetails.json")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log("product details: ", res.foundProduct.coffees);
  //         this.setState({
  //           productSummary: res.foundProduct,
  //           coffee: res.foundProduct.coffees,
  //           roaster: res.foundProduct.coffees.roasters,
  //         });
  //       });
  //   }

  render() {
    console.log(this.props);
    return (
      <div className="Cart">
        <div className="cartBackdrop"></div>
        <div className="cartContainer">
          <section className="cartHeader">
            <span>My Order</span>
            <button className="cancelBtn" onClick={this.props.handleHideCart}>
              <img src="Images/exit-icon.svg" alt="exit-icon" />
            </button>
          </section>
          <section className="cartBody">
            <div className="cartItemsAll">
              <div className="cartItem">
                <div className="productImage">
                  <img src="Images/test-coffee.png" alt="product-image" />
                </div>
                <div className="productInfoWrapper">
                  <div className="productInfo">
                    <div className="productSpecsText">
                      <div className="quantityAndProductName">
                        <span>4x </span> <p>The Amsterdam</p>
                      </div>
                      <p className="grindTypeAndSize">Whole Bean | 12 oz.</p>
                    </div>
                    <div className="productPrice">$69.60</div>
                  </div>
                  <button className="removeFromCart">Remove</button>
                </div>
              </div>
            </div>
            <div className="cartTotal">
              <span>Total</span>
              <p>$104.10</p>
            </div>
            <div className="cartCheckout">
              <button>CHECKOUT</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
