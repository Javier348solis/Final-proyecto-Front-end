import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginaInicio from './PaginaInicio'
import Registro from './Registro'
import './Registro.css'
import InicioSesi from './InicioSesi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <PaginaInicio/>
   <InicioSesi/>
   
    </>
  )
}

export default App
