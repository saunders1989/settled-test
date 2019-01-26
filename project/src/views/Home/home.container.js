import Home from './home.component';
import { connect } from 'react-redux';
import actions from '../../actions';

function mapStateToProps (state) {
  const { properties: { content }, ui } = state;

  const {
    content: uiContent
  } = ui;

  return {
    content,
    uiContent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContent() {
      dispatch(actions.fetchProperties());
    },
    setFilter(filterType, value) {
      dispatch(actions.setFilter({ filterType, value }));
    },
    clearFilters() {
      dispatch(actions.clearFilters());
    }
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;






