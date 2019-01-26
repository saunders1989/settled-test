import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { propertyTypeFilter, propertyValueFilter } = this.props;

    return (
      <div className="filters mb-x6">
        <div className="filter">
          <label htmlFor="property-type">
            {propertyTypeFilter.label}
          </label>
          <select
            value={propertyTypeFilter.value}
            id="property-type"
            onChange={(e) => this.props.setFilter('propertyTypeFilter', e.target.value)}
          >
            <option value="all">All</option>
            {
              propertyTypeFilter.options.map((item, index) => {
                return (
                  <option
                    key={index}
                    aria-selected={propertyTypeFilter.value === item.value}
                    value={item.value}
                  >
                    {item.name}
                  </option>
                );
              })
            }
          </select>
        </div>
        <div className="filter">
          <label htmlFor="property-value">
            {propertyValueFilter.label}
          </label>
          <select
            value={propertyValueFilter.value}
            id="property-type"
            onChange={(e) => this.props.setFilter('propertyValueFilter', e.target.value)}
          >
            <option value="all">All</option>
            {
              propertyValueFilter.options.map((item, index) => {
                return (
                  <option
                    key={index}
                    aria-selected={propertyValueFilter.value === item.value}
                    value={item.value}
                  >
                    {item.name}
                  </option>
                );
              })
            }
          </select>
        </div>
        <button onClick={this.props.clearFilters}>Clear filters</button>
      </div>
    );
  }
}

Filters.propTypes = {
  propertyTypeFilter: PropTypes.shape({
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string
      })
    )
  }),
  propertyValueFilter: PropTypes.shape({
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string
      })
    )
  }),
  setFilter: PropTypes.func,
  clearFilters: PropTypes.func
};

export default Filters;
