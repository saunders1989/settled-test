import Home from './home.component';
import { connect } from 'react-redux';
import actions from '../../actions';

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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;






