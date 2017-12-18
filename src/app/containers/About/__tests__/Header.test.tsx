import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import { About } from '../index';

it('About: Check if `About` label exists', () => {
  const about = TestUtils.renderIntoDocument(
    <About />
  );

  const AboutNode = ReactDOM.findDOMNode(about || About);
  
  expect(AboutNode.textContent).toEqual('About');
});