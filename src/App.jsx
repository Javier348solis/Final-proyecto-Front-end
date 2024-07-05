import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginaInicio from './Paginas/PaginaInicio'
import Registro from './Paginas/Registro'
import InicioSesi from './Paginas/InicioSesi'

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
