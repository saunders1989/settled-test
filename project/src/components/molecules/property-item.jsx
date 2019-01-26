import React from 'react';
import PropTypes from 'prop-types';
import classHelper from 'classnames';

class PropertyItem extends React.Component {
  constructor(props) {
    super(props);
  }

  formatNumberFixed = (value, currency = '£', locale = 'en-GB') => {
    const number = Intl.NumberFormat(locale, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(value);

    return `${currency}${number}`;
  };

  render() {
    const {
      index,
      propertyType,
      address,
      bedrooms,
      bathrooms,
      receptionRooms,
      image,
      price
    } = this.props;

    const classNames = classHelper('property-item');

    return (
      <div tabIndex="0" className={classNames} onClick={() => this.props.goToProperty(index)}>
        <div className="property-item__image property-item__col">
          <img
            src={image}
            alt={`${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.postcode}`}
          />
        </div>
        <div className="property-item__details property-item__col property-item__col--right">
          <h2 className="property-item__guide-price">Guide price</h2>
          <h3 className="property-item__price mb-x3">{this.formatNumberFixed(price)}</h3>
          <p className="property-item__address">
            {address.addressLine1}<br />
            {address.addressLine2}<br />
            {address.city}<br />
            {address.county}<br />
            {address.postcode}
          </p>
          <footer className="property-item__footer">
            <div className="property-item__footer-left">
              <div className="property-item__attribute property-item__attribute--property-type">
                <span>{propertyType}</span>
              </div>
            </div>
            <div className="property-item__footer-right">
              <div className="property-item__attribute property-item__attribute--bedrooms">
                <span>{bedrooms}</span>
              </div>
              <div className="property-item__attribute property-item__attribute--bathrooms">
                <span>{bathrooms}</span>
              </div>
              <div className="property-item__attribute property-item__attribute--reception-rooms">
                <span>{receptionRooms}</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

PropertyItem.propTypes = {
  index: PropTypes.number,
  propertyType: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.shape({
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    postcode: PropTypes.string,
    city: PropTypes.string,
    county: PropTypes.string
  }),
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number,
  receptionRooms: PropTypes.number,
  price: PropTypes.number,
  goToProperty: PropTypes.func
};

export default PropertyItem;
