import React from 'react'
import Empleado from './Empleado'
import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";
import imagen4 from "../assets/imagen4.jpg";
import imagen5 from "../assets/imagen5.jpg";
import imagen6 from "../assets/imagen6.jpg";

const empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: imagen1 },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: imagen2 },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: imagen3 },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: imagen4 },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: imagen5 },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: imagen6 },
]   

function empleados1() {
  
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center '>
      <div className='row'>
        { empleados.map((empleado) => (
          <div className='col-md-4' key={empleado.id}>

          <Empleado fullName={empleado.fullName} picSrc={empleado.pic} title={empleado.title} department={empleado.department}/>
            </div>
        ))

        }

      </div>
    

    </div>
  )
}

export default empleados1