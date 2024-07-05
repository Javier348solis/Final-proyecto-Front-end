import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import getData from '../services/Fetch'

function InicioSesi() {
  const [lista, setLista] = useState([])
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  useEffect(()=>{
    async function obtenerDatos() {
      const datos = await getData("users")
      setLista(datos)
    }
    obtenerDatos()
  },[])
  const validarInputs = ()=>{
    const user = lista.find(users => users.email === correo && users.password === password)
    if (user) {
      localStorage.setItem("idUsaurio", user.id)
      navigate("/home")
    } else {
      alert("Datos incorrectos")
    }
  }

  return (
    <div>
      <input onChange={(e)=> {setCorreo(e.target.value)}} type="text" placeholder='Correo electronico'/>
      <input onChange={(e)=> {setPassword(e.target.value)}} type="password" placeholder='Contraseña'/>
      <button onClick={validarInputs}>Ingresar</button>
      <a href="">No tienes una cuenta?</a>
    </div>
  )
}

export default InicioSesi