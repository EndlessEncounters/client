/* eslint-disable no-unused-vars */
import React from 'react';
import HomeMain from '../HomeMain/HomeMain';
import Header from '../Header/Header';
import Register from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import DashboardMain from '../DashboardMain/DashboardMain';
import {Route, Switch, useLocation} from 'react-router-dom';
import PrivateRoute from '../../routes/routehelpers/PrivateRoute/PrivateRoute';
import PublicRoute from '../../routes/routehelpers/PublicRoute/PublicRoute';
import {useTransition, animated} from 'react-spring'
import About from '../../routes/About/About';

import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from '../Styles/GlobalStyles';
import {lightTheme, darkTheme} from '../Styles/Themes';
import {useDarkMode} from '../Styles/useDarkMode';
import Toggler from '../Styles/Toggler';


function App() {

  const location=useLocation();
  const [theme, themeToggler]=useDarkMode();
  const trans=useTransition(location, location => location.pathname, {
    from: {opacity: 0},
    enter: {position: 'flex', opacity: 1},
    leave: {position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, opacity: 0},
  })
  const themeMode=theme==='light'? lightTheme:darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header toggler={<Toggler theme={theme} toggleTheme={themeToggler} />} />
      <Switch>
        <PublicRoute
          path='/register'
          component={Register} />
        <PublicRoute
          path='/login'
          component={LoginForm} />
        <Route
          exact path='/about'
          component={About} />
        <PrivateRoute
          path='/main'
          component={DashboardMain} />
        <Route
          exact
          path='/'
          component={HomeMain} />
      </Switch>

    </ThemeProvider>)

}

export default App;
