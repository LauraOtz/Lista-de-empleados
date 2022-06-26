import React from 'react'
import tarjetasEstilos from "../css/tarjetasEstilos.css";


function empleado({fullName,picSrc, title, department}) {
    
  return (
    <div className='card text-center bg-dark mt-5'>
       <img src={picSrc} alt="avatares" className='imagen mt-5' />
        <div className='card-body text-light'>
            <h4 className='card-title'>{fullName}</h4>
            <p>{title}</p>
            <p className='bg-info'>{department}</p>
           

        </div>
    </div>
  )
}

export default empleado

