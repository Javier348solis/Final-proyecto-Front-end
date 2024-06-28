import React, { useState } from 'react'
import { guardarUser } from './services/Fetch'

function Registro() {
  const [userName,setUserName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  async function guardaUsuario() {
    let objUsuario = {
      name:userName,
      email:email,
      password:password
    }
    await guardarUser(objUsuario,"users")
  }
  return (
    <>
     <main className='fondo'>
      
      <div>
       <div className='centrar-login'>
       <h1>Registrar</h1>
       <input value={userName} onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder='Nombre'/>
       <input value={email} onChange={(e)=>{setEmail(e.target.value)}}  type="email" placeholder='Correo'/>
       <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Contraseña'/>
       <button onClick={guardaUsuario}>Registrarse</button>
       </div>
      </div>
      </main> 
    </>
  )
}

export default Registro
