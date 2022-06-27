import React from 'react'
import tarjetasEstilos from "../css/tarjetasEstilos.css";


function empleado({fullName,picSrc, title, department}) {
    
  return (
   
    <div className='card text-center mt-5 sm-mt-10 justify-content '>
      <div className='container contenedorImagen'>
       <img src={picSrc} alt="avatares" className='imagen mt-5' />
      </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'>{fullName}</h4>
            <p>{title}</p>
            <p className='bg-info'>{department}</p>
           
            </div>
   </div>
    
  )
}

export default empleado

