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
  function Fragance() {
    ruta('/PaginaHombre')
  }
 
  function Volver() {
    ruta('/home')
  }
  function Salir() {
    ruta('/InicioSesi')
  }
    return (
    <>
     <nav className='fondo-2'>
        <img src="src/Images/Your paragraph text.gif" alt="" width={150} height={150}/>
        <button onClick={Salir}>Salir</button>
        <a className='HowareWe' href="" onClick={PrincipalPage}>Quienes Somos</a>
        <a className='HowareWe' href="" onClick={contact}>Contacto</a>
        <a className='HowareWe' href="" onClick={Fragance}>Perfumes</a>
        <button className='boton-volver' onClick={Volver}>Volver</button>

     </nav>

    </>
  )
}

export default NavBar
