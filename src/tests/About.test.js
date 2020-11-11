import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import About from '../routes/About/About';

it('renders About without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
  <BrowserRouter>
    <About />
  </BrowserRouter>, div);

  ReactDom.unmountComponentAtNode(div);
});