import React from 'react'
import Feature from '../feature/Feature';
import './brand.css';
import {s1, s2, s3, aot1, aot2, aot3} from './import.js'
const Brand = () => {
  return (
    <div className='Moovies__brand section__padding'>
     <div className='Moovies__brand-features__newcomers' id='movies'>
      <Feature/>
     </div>
     <div className='Moovies__brand-features__heading'>
     <h1>NEWCOMERS!</h1>
     </div>
     <div className='Moovies__features-container'>
       <img src={s1} alt='Stranger Things 1'/>
       <p> Stranger Things 1</p>
     </div>
     <div>
        <img src={s2} alt='Stranger Things 2'/>
        <p> Stranger Things 2</p>
     </div>
     <div>
       <img src={s3} alt='Stranger Things 3'/>
       <p> Stranger Things 3</p>
     </div>
     <div>
       <img src={aot1} alt='Attack on Titan 1'/>
       <p> Attack On Titan S1 1</p>
     </div>
     <div>
       <img src={aot2} alt='Attack on Titan 2'/>
       <p> Attack On Titan S2</p>
     </div>
     <div>
       <img src={aot3} alt='Attack on Titan 3'/>
       <p>Attack On Titan S3</p>
     </div>
    

    
    
    
    
    
    </div>
  )
}

export default Brand