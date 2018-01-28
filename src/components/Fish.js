import React from 'react'

class Fish extends React.Component {
  formatPrice(amount) {
    return amount + ' €'
  }
  render() {
    const { details } = this.props
    return (
      <li className="menu-fish">
        <h3 className="fish-name">
          {details.name}
          <span className="fish-price">{this.formatPrice(details.price)}</span>
        </h3>
        <p className="fish-description">{details.description}</p>
        <button>Add to order</button>
      </li>
    )
  }
}

export default Fish;