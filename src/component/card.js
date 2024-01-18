import React from 'react'
import Svg from '../assets/images/illustration-article.svg';
import Avatar from '../assets/images/image-avatar.webp';

function Card() {
  return (
    <div className='container' >
       <div className='box'>
          <img className='img' src={Svg} alt="illustration" />
          <div className='learning'>
             <p >Learning</p>
             <h5 >Published 20 2023</h5>
          </div>
            <div className='content'>
              <h1 className=''>HTML & CSS foundations</h1>
              <p >These languages are the backbone of every website, defining structure, content, and presentation </p>
            </div>
            <div className='footer'>
              <img className="img"src={Avatar} alt=" favicon"/>
               <h3 >Greg Hooper</h3>
            </div>
        </div> 
        
    </div>
  )
}

export default Card;