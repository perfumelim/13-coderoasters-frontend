import React, { Component } from "react";
import "./Cart.scss";

const APIItemsInCart = "http://10.58.1.167:8000/cart";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    fetch(APIItemsInCart, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("product details: 000000000000", res);
        this.setState({
          itemList: res.cartItems,
        });
      });
  }

  handleRemoveItem = (e, id) => {
    const { itemList } = this.state;
    fetch(APIItemsInCart, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        productId: e.target.value,
        groundId: e.target.name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("================================");
        console.log("백앤드에서 오는 응답 메세지: ", res);

        if (res.message === "success") {
          const filteredCart = itemList.filter(
            (item) =>
              !(
                item.id === res.product.product_id &&
                item.ground.id === res.product.ground_id
              )
          );
          // console.log("filteredCard::::-------", res, itemList);

          this.setState({
            itemList: filteredCart,
          });
        } else {
          alert("로그인을 먼저 해주세요!");
        }
      });
  };

  render() {
    console.log(this.props);

    const { itemList } = this.state;

    return (
      <div className="Cart">
        <div className="cartBackdrop" onClick={this.props.handleHideCart}></div>
        <div className="cartContainer">
          <section className="cartHeader">
            <span>My Order</span>
            <button className="cancelBtn" onClick={this.props.handleHideCart}>
              <img src="/Images/exit-icon.svg" alt="exit-icon" />
            </button>
          </section>
          <section className="cartBody">
            <div className="cartItemsAll">
              {itemList &&
                itemList.map((item) => (
                  <div className="cartItem">
                    <div className="productImage">
                      <img src={item.imageUrl} alt="product-image" />
                    </div>
                    <div className="productInfoWrapper">
                      <div className="productInfo">
                        <div className="productSpecsText">
                          <div className="quantityAndProductName">
                            <span>{item.quantity}x </span> <p>{item.name}</p>
                          </div>
                          <p className="grindTypeAndSize">
                            {item.ground.name} Bean | {item.bagWeight}
                          </p>
                        </div>
                        <div className="productPrice">${item.price}</div>
                      </div>
                      <button
                        className="removeFromCart"
                        value={item.id}
                        name={item.ground.id}
                        onClick={this.handleRemoveItem}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="cartTotal">
              <span>Total</span>
              <p>
                $
                {itemList &&
                  itemList
                    .reduce(function (acc, el) {
                      return acc + Number(el.price) * Number(el.quantity);
                    }, 0)
                    .toFixed(2)}
              </p>
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
