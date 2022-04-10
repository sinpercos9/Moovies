import React from 'react'
// import {FaBeer, FaFolder} from 'react-icons/fa'
// import { IconContext } from "react-icons"
import { Article, Brand, Cta, Navbar, Feature } from './component'
import { Footer, Header, Trailer} from './containers'
import "./App.css"

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <Cta/>
        <Article/>
        <Feature/>
        <Trailer/>
        <Footer/>


            
    </div>
  )
}

export default App