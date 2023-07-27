/// https://github.com/jsdom/jsdom/issues/3368#issuecomment-1147970817
global.ResizeObserver = class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
};
