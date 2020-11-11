import React from 'react';
import ReactDom from 'react-dom';
import SimplifiedViewport from '../components/Viewport/SimplifiedViewport';

it('renders Viewport without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<SimplifiedViewport />, div);

  ReactDom.unmountComponentAtNode(div);
});