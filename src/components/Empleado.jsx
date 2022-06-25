import React from 'react'


function empleado({fullName,picSrc, title, department}) {
    
  return (
    <div className='card text-center bg-dark'>
       <img src={picSrc} alt="avatares" />
        <div className='card-body text-light'>
            <h4 className='card-title'>{fullName}</h4>
            <p>{title}</p>
            <p className='bg-info'>{department}</p>
           

        </div>
    </div>
  )
}

export default empleado

