import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';
import './Header.css'
import SoundPlayCheck from '../SoundWidgets/SoundPlayCheck';

export default class Header extends Component {
  static contextType=UserContext;
  static defaultProps = {
    themeToggler: {}
  }
  renderLogout=() => {
    return <div >
      <Link
        onClick={this.context.processLogout}
        className='headerLink'
        to='/login' aria-label="Logout link">Logout</Link>
    </div>
  }

  renderLogin=() => {
    return <>
      <div >
        <Link className='headerLink' to='/login' aria-label="Login page link">Login</Link>
      </div>
      <div >
        <Link className='headerLink' to='/register' aria-label="Register page link">Register</Link>
      </div>
    </>
  }
  render() {
    return (
      <nav className='border' id='headerNav'>
        <div >{ TokenService.hasAuthToken()
          ? this.context.user.username
          : null }
        </div>
        <div id='themeToggle'>
          {this.props.toggler}
        </div>
        
        <div id='soundToggle'>  
          <SoundPlayCheck />
        </div>


        <div >
          <Link className='headerLink' to='/' aria-label="Home page link">Home</Link>
        </div>

        <div >
          <Link className='headerLink' to='/main' aria-label="Dashboard page link">Dash</Link>
        </div>

        <div >
          <Link className='headerLink' to='/about' aria-label="About page link">About</Link>
        </div>
        
        {TokenService.hasAuthToken()
          ? this.renderLogout()
          :this.renderLogin()}
        
      </nav>
    )
  }
}
