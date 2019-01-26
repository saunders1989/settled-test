import { connect } from 'react-redux';
import actions from '../../actions';

import Property from './property.component';

function mapStateToProps (state) {
  const { properties: { content } } = state;

  return {
    content
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContent() {
      dispatch(actions.fetchProperties());
    }
  };
}

const PropertyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Property);

export default PropertyContainer;






