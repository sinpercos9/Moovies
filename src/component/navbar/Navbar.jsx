import React, {useState} from 'react'
import './navbar.css' 
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'


const Menu =() =>(
  <>
    <p><a href='#home'>MOVIE</a> </p>
    <p><a href='#home'>SERIES</a> </p>
    <p><a href='#home'>WATCHLIST</a> </p>
    <p><a href='#home'>My-🐮</a> </p>
  </>

)

//BEM--Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false);
  return (
    <div className='Moovies_navbar'>
    
      <div className='Moovies_navbar-links'>
        <div className='Moovies_navbar-links_logo'></div>
          
        </div>
        <div className='Moovies__navbar-links_container'>
          <Menu/>
        </div>
        <div className='Moovies__navbar-sign'>
          <button type='button'>Sign Up</button>
        </div>
      <div className='Moovie__navbar-menu'>
        {toggleMenu
          ?<RiCloseLine color='#fff'size={28} onClick={()=> setToggleMenu(false)} />
          :<RiMenu3Line color='#fff'size={28} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          
        <div className='Moovies__navbar-menu_container shadow-drop-2-center'> 
          <div className='Moovies__navbar-menu_container-links'>
            <Menu />
          </div>
          <div className='Moovies__navbar-menu_container-links-sign'>
            <button type='button'>Sign Up</button>
          </div>
      </div>
        
        ) 
        }
      </div>
      

      
    
    
    
    </div>
  )
}

export default Navbar