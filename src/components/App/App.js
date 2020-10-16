import React from 'react';
import Home from '../../routes/Home/Home';
import Header from '../Header/Header';
import Register from '../../routes/Register/Register';
import Login from '../../routes/Login/Login';
import Dashboard from '../../routes/Dashboard/Dashboard';
import {Route, Switch, useLocation} from 'react-router-dom';
import PrivateRoute from '../../routes/routehelpers/PrivateRoute/PrivateRoute';
import PublicRoute from '../../routes/routehelpers/PublicRoute/PublicRoute';
import { useTransition, animated } from 'react-spring'
import About from '../../routes/About/About';
import './App.css';


function App() {

  const location = useLocation()
  const trans = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { position: 'flex', opacity: 1 },
    leave: { position: 'absolute', opacity: 0 },
    })

  return trans.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <header>
        <Header />
      </header>
    
      <Switch location={location}>
        <Route
          exact
          path='/'
          component={Home} />
        <PublicRoute
          path='/register'
          component={Register} />
        <PublicRoute
          path='/login'
          component={Login} />
        <PublicRoute
          path='/about'
          component={About} />
        <PublicRoute
          path='/main'
          component={Dashboard} />
      </Switch>
    </animated.div>
  ))
}

export default App;
