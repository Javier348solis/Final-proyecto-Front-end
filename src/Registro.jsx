import React, { useEffect,useState } from 'react'
import getData, { guardarUser } from './services/Fetch'
import { useNavigate } from 'react-router-dom'
function Registro() {
  const [userName,setUserName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [datos, setDatos] = useState([])
  const navegar = useNavigate()
  
  useEffect(() => {
    const getUsers = async () => {
        const dataUsuarios = await getData("users")
        setDatos(dataUsuarios)
    }
    getUsers()
}, []);
const validaUsuario = async() => {
    const user = datos.find((usuario) => usuario.email === email);
    if (user) {
      alert("INCORRECTO")
    } else {
     await guardarUser({
        name:userName,
        email:email,
        password:password
      },"users")
      navegar("/InicioSesi")
    }
}
  
  return (
    <>
     <main className='fondo'>
      <div>
       <div className='centrar-login'>
       <h1>Registrar</h1>
       <input  onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder='Nombre'/>
       <input onChange={(e)=>{setEmail(e.target.value)}}  type="email" placeholder='Correo'/>
       <input  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Contraseña'/>
       <button onClick={validaUsuario}>Registrarse</button>
       </div>
      </div>
      </main> 
    </>
  )
}

export default Registro
