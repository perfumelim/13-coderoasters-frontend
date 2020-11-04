import React, { Component } from "react";
import Cart from "../../Components/Cart/Cart";
import "./ProductDetails.scss";

const APIProductDetails = "http://10.58.1.167:8000/products/1";

export default class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productSummary: {},
      coffee: {},
      roaster: {},
      groundTypes: {},
      quantityCount: 1,
      showDropdown: false,
      showLearnMore: false,
      groundTypeSelected: "",
      hideDropdown: true,
      addCart: [],
    };
  }

  handleIncrementQuantity = () => {
    var currentQuantity = parseInt(
      document.getElementById("currentQuantity").value,
      10
    );
    currentQuantity = isNaN(currentQuantity) ? 0 : currentQuantity;
    if (currentQuantity < 10) {
      currentQuantity++;
      document.getElementById("currentQuantity").value = currentQuantity;
      this.setState({
        quantityCount: currentQuantity,
      });
    }
  };

  handleDecreaseQuantity = () => {
    var currentQuantity = parseInt(
      document.getElementById("currentQuantity").value,
      10
    );
    currentQuantity = isNaN(currentQuantity) ? 0 : currentQuantity;
    if (currentQuantity > 1) {
      currentQuantity--;
      document.getElementById("currentQuantity").value = currentQuantity;
      this.setState({
        quantityCount: currentQuantity,
      });
    }
  };

  handleSelectWhole = () => {
    this.setState({
      showDropdown: false,
      hideDropdown: true,
    });
  };

  handleSelectGround = () => {
    this.setState({
      showDropdown: true,
      hideDropdown: false,
    });
  };

  handleLearnMore = () => {
    const { showLearnMore } = this.state;
    this.setState({
      showLearnMore: !showLearnMore,
    });
  };

  handleGroundType = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      hideDropdown: true,
    });
  };

  componentDidMount() {
    fetch(APIProductDetails)
      .then((res) => res.json())
      .then((res) => {
        console.log("product details: ", res.foundProduct.coffees);
        this.setState({
          productSummary: res.foundProduct,
          coffee: res.foundProduct.coffees,
          roaster: res.foundProduct.coffees.roasters,
        });
      });
    fetch("/Data/GroundType.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("dropdown groundlist: ", res.foundGroundList);
        this.setState({
          groundTypes: res.foundGroundList,
        });
      });
  }

  render() {
    console.log("thirdly: ", this.state.productSummary);
    console.log("coffee", this.state.coffee, "roaster", this.state.roaster);
    console.log("showdropdown", this.state.showDropdown);
    console.log("map success", this.state.groundTypes);

    const {
      productSummary,
      coffee,
      roaster,
      showDropdown,
      showLearnMore,
      quantityCount,
      groundTypes,
      groundTypeSelected,
      hideDropdown,
    } = this.state;

    return (
      <div className="productDetails">
        <Cart
        // productSummary={this.state.productSummary}
        // coffee={this.state.coffee}
        // roaster={this.state.roaster}
        // groundTypes={this.state.groundTypes}
        // quantityCount={this.state.quantityCount}
        // groundTypeSelected={this.state.groundType}
        />
        <section className="productDetailsMain">
          <div className="productImage">
            <img src={productSummary.image_url} alt="제품이미지" />
          </div>
          <div className="descriptionWrapper">
            <p className="titleRoastery">{roaster && roaster.name}</p>
            <p className="titleProductName">{productSummary.name}</p>
            <p className="productDescription">{coffee && coffee.note}</p>
            <p className="price">
              ${productSummary.price}
              <span>
                {""}|{""}
              </span>
              {coffee && coffee.bag_weight}
            </p>
            <div className="quantityPicker">
              <div className="quantityLabel">
                <span>Quantity</span>
              </div>
              <div className="quantityWrapper">
                <input
                  type="button"
                  className="quantitySubtract"
                  value="-"
                  onClick={this.handleDecreaseQuantity}
                />
                <input
                  type="text"
                  className="quantitySelected"
                  id="currentQuantity"
                  value={quantityCount}
                />
                <input
                  type="button"
                  value="+"
                  className="quantityAdd"
                  onClick={this.handleIncrementQuantity}
                />
              </div>
            </div>
            <div className="grindPicker">
              <div className="grindLabel">
                <span>Grind</span>
              </div>
              <div className="grindContainer">
                <button
                  onClick={this.handleSelectWhole}
                  className={
                    showDropdown ? "grindWhole" : "grindWhole selectedContainer"
                  }
                >
                  Whole
                </button>
                <button
                  onClick={this.handleSelectGround}
                  className={
                    showDropdown
                      ? "grindGround selectedContainer"
                      : "grindGround"
                  }
                >
                  Ground
                  <p className="selectedOptionValue">{groundTypeSelected}</p>
                </button>
              </div>
              {showDropdown && !hideDropdown ? (
                <div className="groundTypeDropdown">
                  <ul className="dropdownOptions">
                    {groundTypes &&
                      groundTypes.map((option) => (
                        <li className="optionItem">
                          <input
                            onClick={this.handleGroundType}
                            name="groundTypeSelected"
                            type="button"
                            value={option.name}
                          />
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <button className="addBagBtn">
              <span>ADD TO BAG </span>
              <span>
                {""}|{""}
              </span>
              <span className="itemPrice">PAY ${productSummary.price}</span>
            </button>
          </div>
        </section>
        <section className="productSpecs">
          <div className="scheduleWrapper">
            <div>
              <div className="specsImageWrapper">
                <img src="Images/roasting-icon.svg" alt="icon" />
              </div>
              <p className="infoTitle">Roasting Schedule</p>
              <p className="infoSummary">
                Roasts on {coffee && coffee.roasting_schedule}
              </p>
            </div>
          </div>
          <div className="roastLevelWrapper">
            <div>
              <div className="specsImageWrapper">
                <img src="Images/roastlevel-icon.svg" alt="icon" />
              </div>
              <p className="infoTitle">
                Trade Roast Level
                <button onClick={this.handleLearnMore} className="learnMoreBtn">
                  <img src="Images/learn-more-icon.svg" />
                </button>
              </p>
              <p className="infoSummary">{coffee && coffee.roast_level}</p>
              {showLearnMore && showLearnMore ? (
                <div className="roastLevelLearnMore">
                  <div className="learnMoreTitle">Trade Roast Level</div>
                  <div className="learnMoreBody">
                    Each roaster interprets roast level differently. We evaluate
                    every coffee by our own common standard that is consistent
                    across our catalog for easy browsing.
                  </div>
                </div>
              ) : null}
              <p className="infoSummary">
                {coffee && coffee.trade_roast_level}
              </p>
            </div>
          </div>
          <div className="tasteWrapper">
            <div>
              <div className="specsImageWrapper">
                <img src="Images/taste-icon.svg" alt="icon" />
              </div>
              <p className="infoTitle">Taste</p>
              <p className="infoSummary">{coffee && coffee.taste}</p>
            </div>
          </div>
        </section>
        <section className="aboutTheRoaster">
          <aside className="aboutRoasterImage">
            <img src={roaster && roaster.image_url} alt="aboutroaster-image" />
          </aside>
          <div className="aboutRoasterText">
            <div className="aboutTextWrapper">
              <h2 className="aboutRoasterHeading">About the Roaster</h2>
              <div className="locationInfo">
                <div className="iconWrapper">
                  <img src="Images/location-icon.svg" alt="location-icon" />
                </div>
                <div className="aboutInfoText">
                  <p className="factLabel">Location</p>
                  <p className="factSummary">{roaster && roaster.location}</p>
                </div>
              </div>
              <div className="funfactInfo">
                <div className="iconWrapper">
                  <img src="Images/funfact-icon.svg" alt="funfact-icon" />
                </div>
                <div className="aboutInfoText">
                  <p className="factLabel">Fun Fact</p>
                  <p className="factSummary">{roaster && roaster.fun_fact}</p>
                </div>
              </div>
              <div className="shopRoasterBtn">
                <button>
                  Shop {roaster && roaster.name}
                  {""} <span>⟶</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="moreDetails">
          <h1 className="detailsHeading">Details</h1>
          <div className="coffeeFactsContainer">
            <h1 className="coffeeNameHeading">{productSummary.name}</h1>
            <div className="coffeeFactsBody">
              <div className="coffeeProcess">
                <div>
                  <img src="Images/process-icon.svg" alt="icon" />
                </div>
                <div className="coffeeFactsText">
                  <div className="factsCategory">Process</div>
                  <div>{coffee && coffee.process}</div>
                </div>
              </div>
              <div className="coffeeSubRegion">
                <div>
                  <img src="Images/subregion-icon.svg" alt="icon" />
                </div>
                <div className="coffeeFactsText">
                  <div className="factsCategory">Sub Region</div>
                  <div>{coffee && coffee.sub_region}</div>
                </div>
              </div>

              <div className="coffeeElevation">
                <div>
                  <img src="Images/elevation-icon.svg" alt="icon" />
                </div>
                <div className="coffeeFactsText">
                  <div className="factsCategory">Elevation</div>
                  <div>{coffee && coffee.elevation}</div>
                </div>
              </div>
              <div className="coffeeVariety">
                <div>
                  <img src="Images/variety-icon.svg" alt="icon" />
                </div>
                <div className="coffeeFactsText">
                  <div className="factsCategory">Variety</div>
                  <div>{coffee && coffee.variety}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="roastersNotesContainer">
            <h2 className="roastersNotesHeading">Roaster's Notes</h2>
            <div className="roastersNotesBody">{coffee && coffee.note}</div>
          </div>
        </section>
        <div className="similarCoffeesContainer">
          <div className="similarCoffeesHeading">Similar Coffees</div>
        </div>
      </div>
    );
  }
}
