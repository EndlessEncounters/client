import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';
import './Header.css'
import SoundPlayCheck from '../SoundWidgets/SoundPlayCheck';

export default class Header extends Component {
  static contextType=UserContext;

  renderLogout=() => {
    return <div >
      <Link
        onClick={this.context.processLogout}
        to='/login'>Logout</Link>
    </div>
  }

  renderLogin=() => {
    return <>
      <div >
        <Link className='headerLink' to='/login'>Login</Link>
      </div>
      <div >
        <Link className='headerLink' to='/register'>Register</Link>
      </div>
    </>
  }
  render() {
    return (
      <nav className='headerNav'>
        <div >{TokenService.hasAuthToken()
          ? this.context.user.username
          :null}
        </div>

        <div >
          <Link className='headerLink' to='/'>Home</Link>
        </div>

        <div >
          <Link className='headerLink' to='/main'>Dash</Link>
        </div>


        <div >
          <Link className='headerLink' to='/about'>About</Link>
        </div>
        <div>  <SoundPlayCheck /></div>

        {TokenService.hasAuthToken()
          ? this.renderLogout()
          :this.renderLogin()}

      </nav>
    )
  }
}
