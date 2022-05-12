// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props;

    return (
      <div className="order">
        <p>
          <span>{user}</span> bought <span>{product}</span> for <span>{price.value} {price.currency}</span>
        </p>
      </div>
    );
  }
}

export default Order;