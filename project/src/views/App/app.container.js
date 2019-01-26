import App from './app.component';
import { connect } from 'react-redux';
import actions from '../../actions';

function mapStateToProps (state) {
  const { ui } = state;
  const { content: uiContent } = ui;

  return {
    uiContent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUiContent() {
      dispatch(actions.fetchUiContent());
    }
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;






