import React from 'react'

function Contacto() {
  return (
    <>
     <div> <input type="text" placeholder='Nombre Completo'/>
      <input type="number" placeholder='Telefono Completo'/>
      <input type="email" placeholder='Correo Electronico'/>
      <input type="text" placeholder='Mensaje'/>
      <button>Enviar</button> 
      </div>
<br/>
<h4>*Nota: Las dudas o consultas se responderan en un lapso de 12 a 24 horas por correo electronico o WhatsApp. Gracias por su preferencia!</h4>
    </>
  )
}

export default Contacto
