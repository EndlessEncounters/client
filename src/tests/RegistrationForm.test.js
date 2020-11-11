import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

it('renders RegistrationForm without crashing', () => {
  const div=document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <RegistrationForm />
    </BrowserRouter>, div);

  ReactDom.unmountComponentAtNode(div);
});
