import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';
import _ from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    if (_.isEmpty(props.uiContent)) props.getUiContent();
  }

  render() {
    const { uiContent } = this.props;

    if (_.isEmpty(uiContent)) return null;

    return (
      <Switch>
        {renderRoutes(this.props.route.routes)}
      </Switch>
    );
  }
}

App.propTypes = {
  route: PropTypes.any
};

export default App;
