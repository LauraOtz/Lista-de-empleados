import React from 'react'
import {empleados} from '../data/lista'

const Empleados1 = () => {
    
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <ul>
                    
                        {empleados.map((empleado, index)=>{

                            return <li key={empleado.id}> 
                            {index +1} - {empleado.fullName}
                            </li>
                        })}
                    
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Empleados1