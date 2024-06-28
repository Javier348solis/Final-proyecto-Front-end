import React from 'react'
import { useNavigate } from 'react-router-dom'
 
function PaginaInicio() {
  const navegar = useNavigate()
  return (
    <>
 <main className='photo'>
 <div className='Cuadro-Pag-Ini'>
      <h1 className='Title'>Bienvenido a la pagina de perfumes mas grande de Costa Rica</h1>
      <div className='Space'>
      <button className='Botones'onClick={()=>{navegar("/Registro")}}>Registrarse</button>
      <button className='Botones'>Iniciar sesion</button>
      </div>
      </div>

 </main>
    </>
  )
}

export default PaginaInicio
