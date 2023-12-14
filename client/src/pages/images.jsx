import React from 'react'
import AP4 from '../CSS/ap4.png';
import Inspection from '../CSS/Inspection.png';
import Process from '../CSS/process.png'
import Claims from '../CSS/claims.png'
import '../CSS/images.css'


const images = () => {
  return (
    <div className='image__container'>
         <img src={AP4} alt="Description of the image" />
         <img src={Inspection} alt="Description of the image" />
         <img src={Process} alt="Description of the image" />
         <img src={Claims} alt="Description of the image" />
    </div>
  )
}

export default images