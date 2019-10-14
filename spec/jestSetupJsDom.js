import { JSDOM } from 'jsdom';

// Create windows object
const { window } = new JSDOM('<!doctype html><html><body></body></html>');

// Define globals params
global.window = window;
global.document = window.document;
global.navigator = { userAgent: 'node.js' };
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Copy Props
const copyProps = (src, target) => Object.defineProperties(target, {
  ...Object.getOwnPropertyDescriptors(src),
  ...Object.getOwnPropertyDescriptors(target),
});

// Run copyProps function
copyProps(window, global);
