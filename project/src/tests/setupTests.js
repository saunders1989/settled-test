import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

Enzyme.configure({ adapter: new Adapter() });

/* istanbul ignore next */
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: /* istanbul ignore next */ () => {},
    removeListener: /* istanbul ignore next */ () => {}
  };
};
