import React from 'react';
import ReactDom from 'react-dom';
import AccordionBtn from '../components/AccordionBtn/AccordionBtn';

it('renders AccordionBtn without crashing', () => {
  const div=document.createElement('div');

  ReactDom.render(<AccordionBtn />, div);

  ReactDom.unmountComponentAtNode(div);
});
