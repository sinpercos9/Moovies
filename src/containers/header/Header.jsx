import React from 'react'
import './header.css'
import logo from '../../asstes/logo.png'
const Header = () => {
  return (
    
  <div className='Moovies__header section__padding' id='home'>Header
      <div className='Moovies__header-content'>
        <h1 className='gradient__text'>SIGN IN</h1>
        <p>Grab your Moovies in your own mood! </p>
      </div>
      <div className='Moovies__header-content__input'>
        <input type='email' placeholder='Your Email Address'/>
        <br/>
        <input type='password' placeholder='Password'/>
      </div>
      <div type= 'Moovies__header-content__sign'>
        <button type='button'>Sign In</button>
      </div>
      <div className='Moovies__header-content__forgot'> Forgot password?</div>
      <div className='Moovies_header-image'>
        <img src={logo} alt='Moovies'/>
      </div>
    
    </div>)
}

export default Header