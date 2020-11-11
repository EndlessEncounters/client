import React from 'react';
import ReactDom from 'react-dom';
import LoginForm from '../components/LoginForm/LoginForm';

it('renders LoginForm without crashing', () => {
  const div=document.createElement('div');

  ReactDom.render(<LoginForm />, div);

  ReactDom.unmountComponentAtNode(div);
});
