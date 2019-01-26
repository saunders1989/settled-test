import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PropertyList from '../../components/organisms/property-list';

class Home extends React.Component {
  constructor(props) {
    super(props);
    if (_.isEmpty(props.content)) props.getContent();
  }

  goToProperty = (index) => {
    this.props.history.push(`/property/${index}`)
  }

  render() {
    const { content } = this.props;

    if (_.isEmpty(content)) return null;

    return (
      <div className="container">
        <h1 className="heading text-center mt-x3 mb-x10">{content.title}</h1>
        <p>filters</p>
        <PropertyList properties={content.properties} goToProperty={this.goToProperty} />
      </div>
    );
  }
}

Home.propTypes = {
  content: PropTypes.object
};

export default Home;
