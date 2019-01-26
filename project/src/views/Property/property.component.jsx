import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

class Property extends React.Component {
  constructor(props) {
    super(props);
    if (_.isEmpty(props.content)) props.getContent();
  }

  render() {
    const { content } = this.props;

    if (_.isEmpty(content)) return null;

    const property = content.properties[this.props.match.params.id];
    const { address } = property

    return (
      <div className="container">
        <div className="property-header">
          <h1 className="heading mb-x6 mt-x6 text-center">Property Details</h1>
          <img
            src={property.leadImageURI}
            alt={`${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.postcode}`}
            className="mb-x6"
          />
          <h2 className="subheading mb-x2">Details</h2>
          <p className="mb-x4">Bedrooms: {property.numBedrooms}</p>
          <p className="mb-x4">Recption: {property.numReceptionRooms}</p>
          <p className="mb-x6">Bathrooms: {property.numBathrooms}</p>
          <h2 className="subheading mb-x2">Address</h2>
          <p className="property-item__address mb-x6">
            {address.addressLine1}<br />
            {address.addressLine2}<br />
            {address.city}<br />
            {address.county}<br />
            {address.postcode}
          </p>
          <h2 className="subheading mb-x2">Date listed</h2>
          <p className="mb-x6">{moment(property.dateListed).format('DD MMMM YYYY')}</p>
          {property.features.length > 0 &&
            <Fragment>
              <h2 className="subheading mb-x2">Key features</h2>
              <ul className="mb-x6">
                {
                  property.features.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    );
                  })
                }
              </ul>
            </Fragment>
          }
        </div>
      </div>
    );
  }
}

Property.propTypes = {
  content: PropTypes.object,
  match: PropTypes.object
};

export default Property;
