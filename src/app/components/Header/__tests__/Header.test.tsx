import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

import Header from '../index';

it('Header: Check if has Barbar title', () => {
  const header = TestUtils.renderIntoDocument(
    <Header />
  );

  const headerNode = ReactDOM.findDOMNode(header || Header);
  
  expect(headerNode.textContent).toEqual('Barbar');
});