import React from "react";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../Redux/Cart/cart.actions";

import "./Cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
