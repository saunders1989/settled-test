import React from 'react';
import PropTypes from 'prop-types';
import classHelper from 'classnames';

import PropertyItem from '../../components/molecules/property-item';

class PropertyList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { properties } = this.props;

    const classNames = classHelper('property-list');

    return (
      <div className={classNames}>
        {
          properties.map((property, index) => {
            return (
              <PropertyItem
                key={index}
                index={index}
                propertyType={property.propertyType}
                image={property.leadImageURI}
                address={property.address}
                bedrooms={property.numBedrooms}
                bathrooms={property.numBathrooms}
                receptionRooms={property.numReceptionRooms}
                price={property.price}
                goToProperty={this.props.goToProperty}
              />
            );
          })
        }
      </div>
    );
  }
}

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      propertyType: PropTypes.string,
      address: PropTypes.shape({
        addressLine1: PropTypes.string,
        addressLine2: PropTypes.string,
        postcode: PropTypes.string,
        city: PropTypes.string,
        county: PropTypes.string
      }),
      numBedrooms: PropTypes.number,
      leadImageURI: PropTypes.string,
      dateListed: PropTypes.string,
      price: PropTypes.number,
      features: PropTypes.arrayOf(
        PropTypes.string
      ),
      numBathrooms: PropTypes.number,
      numReceptionRooms: PropTypes.number
    })
  ),
  goToProperty: PropTypes.func
};

export default PropertyList;
