import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const ruta = useNavigate()
  function PrincipalPage() {
    ruta('/home')
  }
  function contact() {
    ruta('/Contacto')
        
    
  }
    return (
    <>
     <nav className='fondo-2'>
        <img src="src/Images/Your paragraph text.gif" alt="" width={150} height={150}/>
        <a className='HowareWe' href="" onClick={PrincipalPage}>Quienes Somos</a>
        <a href="" onClick={contact}>Contacto</a>

     </nav>

    </>
  )
}

export default NavBar
