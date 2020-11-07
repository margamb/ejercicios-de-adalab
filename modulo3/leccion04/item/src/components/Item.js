import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{this.props.quantity}</h5>
        <div>
          <h5>{this.props.name}</h5>
          <h6 className="text-muted">{this.props.description}</h6>
        </div>
        <div className="badge badge-info">{this.props.category}</div>
        <h5>{this.props.price}$</h5>
      </div>
    );
  }
}

Item.defaultProps = {
  description: 'No hay descripcion',
};

Item.propTypes = {
  name: PropTypes.isRequired,
  price: PropTypes.number.isRequired,
};
export default Item;
