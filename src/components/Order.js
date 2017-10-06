import React from "react";
import { formatPrice } from "../helpers";
import CSSTransitionGroup from "react-addons-css-transition-group";
class Order extends React.Component {
  constructor() {
    super();
    // add methods to bind this
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    let fish = this.props.fishes[key];
    let count = this.props.order[key];
    const removeButton = (
      <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
    );

    if (!fish || fish.status === "unavailable") {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : "fish"} is no longer available{" "}
          {removeButton}
        </li>
      );
    }

    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup
            component="span"
            className="count"
            transitionName="count"
            transitionEnterTimeout="250"
            transitionLeaveTimeout="250"
          >
            <span key={count}>{count}</span>
          </CSSTransitionGroup>
          lbs {fish.name} {removeButton}
        </span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailble = fish && fish.status === "available";
      if (isAvailble) {
        // if available return the new amount or 0 if the fish was deleted
        return prevTotal + (count * fish.price || 0);
      }
      // or just return the last amount
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>

        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total: </strong>
            {formatPrice(total)}
          </li>
        </CSSTransitionGroup>
      </div>
    );
  }
}

Order.proptypes = {
  fishes: React.PropTypes.object.isRequired,
  order: React.PropTypes.object.isRequired,
  removeFromOrder: React.PropTypes.func.isRequired
};

export default Order;
