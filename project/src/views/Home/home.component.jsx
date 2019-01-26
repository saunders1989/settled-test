import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PropertyList from '../../components/organisms/property-list';
import Filters from '../../components/organisms/filters';

class Home extends React.Component {
  constructor(props) {
    super(props);
    if (_.isEmpty(props.content)) props.getContent();
  }

  goToProperty = (index) => {
    this.props.history.push(`/property/${index}`)
  }

  render() {
    const { content, uiContent } = this.props;

    if (_.isEmpty(content)) return null;

    return (
      <div className="container">
        <h1 className="heading text-center mt-x3 mb-x10">{content.title}</h1>
        <Filters
          propertyTypeFilter={uiContent.propertyTypeFilter}
          propertyValueFilter={uiContent.propertyValueFilter}
          setFilter={this.props.setFilter}
          clearFilters={this.props.clearFilters}
        />
        <PropertyList
          properties={content.properties}
          goToProperty={this.goToProperty}
          propertyTypeFilter={uiContent.propertyTypeFilter}
          propertyValueFilter={uiContent.propertyValueFilter}
        />
      </div>
    );
  }
}

Home.propTypes = {
  uiContent: PropTypes.object,
  content: PropTypes.object,
  setFilter: PropTypes.func,
  clearFilters: PropTypes.func
};

export default Home;
