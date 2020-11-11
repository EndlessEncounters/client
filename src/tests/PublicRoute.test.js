import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import PublicRoute from '../routes/routehelpers/PublicRoute/PublicRoute';

it('renders PublicRoute without crashing', () => {
  const div=document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <PublicRoute />
    </BrowserRouter>, div);

  ReactDom.unmountComponentAtNode(div);
});
