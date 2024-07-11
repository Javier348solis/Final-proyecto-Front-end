import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const ruta = useNavigate()
  function PrincipalPage() {
    ruta('/QuienesSomos')
  }
  function contact() {
    ruta('/Contacto') 
  }
  function Men() {
    ruta('/PaginaHombres')
  }
  function Women() {
    ruta('/Mujeres')
  }
  function Volver() {
    ruta('/home')
  }
    return (
    <>
     <nav className='fondo-2'>
        <img src="src/Images/Your paragraph text.gif" alt="" width={150} height={150}/>
        <a className='HowareWe' href="" onClick={PrincipalPage}>Quienes Somos</a>
        <a className='HowareWe' href="" onClick={contact}>Contacto</a>
        <a className='HowareWe' href="" onClick={Women}>Mujeres</a>
        <a className='HowareWe' href="" onClick={Men}>Hombres</a>
        <button className='boton-volver' onClick={Volver}>Volver</button>

     </nav>

    </>
  )
}

export default NavBar
