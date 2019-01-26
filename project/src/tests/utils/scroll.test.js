import {
  getScrollState,
  isInScrollView
} from '../../utils/scroll';

describe('scroll', () => {
  describe('getScrollState', () => {
    it('it return "start" if scrollTop === 0', () => {
      expect(getScrollState({ scrollTop: 0, clientHeight: 440, scrollHeight: 2971 })).toBe('start');
    });
    it('it return "scrolling" if scrollTop > 0 && scrollTop < 2531', () => {
      expect(getScrollState({ scrollTop: 1, clientHeight: 440, scrollHeight: 2971 })).toBe('scrolling');
      expect(getScrollState({ scrollTop: 199, clientHeight: 440, scrollHeight: 2971 })).toBe('scrolling');
    });
    it('it return "end" if scrollTop + clientHeight === scrollHeight', () => {
      expect(getScrollState({ scrollTop: 2531, clientHeight: 440, scrollHeight: 2971 })).toBe('end');
    });
  });
  describe('isInScrollView', () => {
    it('it return TRUE if the child element is within the parent', () => {
      const parentEl = document.createElement('div');
      parentEl.getBoundingClientRect = jest.fn(() => ({
        top: 0,
        bottom: 200,
        height: 200
      }));
      const childEl = document.createElement('div');
      childEl.getBoundingClientRect = jest.fn(() => ({
        top: 50,
        bottom: 100,
        height: 50
      }));
      expect(isInScrollView(parentEl, childEl)).toBe(true);
    });
    it('it return FALSE if the child element is within the parent', () => {
      const parentEl = document.createElement('div');
      parentEl.getBoundingClientRect = jest.fn(() => ({
        top: 0,
        bottom: 200,
        height: 200
      }));
      const childEl = document.createElement('div');
      childEl.getBoundingClientRect = jest.fn(() => ({
        top: 200,
        bottom: 250,
        height: 50
      }));
      expect(isInScrollView(parentEl, childEl)).toBe(false);
    });
  });
});