import React from 'react';
import ReactDom from 'react-dom';
import DashboardMain from '../components/DashboardMain/DashboardMain';

it('renders DashboardMain without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(<DashboardMain />, div);

  ReactDom.unmountComponentAtNode(div);
});