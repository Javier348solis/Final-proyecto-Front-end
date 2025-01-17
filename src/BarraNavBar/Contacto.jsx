import React from 'react'
import NavBar from '../components/NavBar'

function Contacto() {
  return (
    <>
    <NavBar/>
     <div className='Contacto'>
      <input type="text" placeholder='Nombre Completo'/>
      <input type="number" placeholder='Telefono Completo'/>
      <input type="email" placeholder='Correo Electronico'/>
      <input type="text" placeholder='Mensaje'/>
      <button onClick={Contacto}>Enviar</button> 
      </div>
      
<br/>
<h4 className='Info-contact'>*Nota: Las dudas o consultas se responderan en un lapso de 12 a 24 horas por correo electronico o WhatsApp. Gracias por su preferencia!</h4>
   
    </>
  )
}

export default Contacto
