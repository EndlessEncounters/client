import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../routes/routehelpers/PrivateRoute/PrivateRoute';

it('renders PrivateRoute without crashing', () => {
  const div=document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <PrivateRoute />
    </BrowserRouter>, div);

  ReactDom.unmountComponentAtNode(div);
});
