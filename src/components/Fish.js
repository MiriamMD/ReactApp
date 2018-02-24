import React from 'react'

class Fish extends React.Component {
  formatPrice(amount) {
    return amount + ' €'
  }
  render() {
    const { details, index } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to order' : 'Sold out';
    return (
      <li className="menu-fish">
        <h3 className="fish-name">
          {details.name}
          <span className="fish-price">{this.formatPrice(details.price)}</span>
        </h3>
        <p className="fish-description">{details.description}</p>
        <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish;