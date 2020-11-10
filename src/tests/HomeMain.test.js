import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomeMain from '../components/HomeMain/HomeMain';

it('renders HomeMain without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
  <BrowserRouter>
    <HomeMain />
  </BrowserRouter>, div);

  ReactDom.unmountComponentAtNode(div);
});