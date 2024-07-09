import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PaginaInicio from './Paginas/PaginaInicio.jsx'
import Registro from './Paginas/Registro.jsx'
import PaginaPrincipal from './Paginas/PaginaPrincipal.jsx'
import Contacto from './BarraNavBar/Contacto'
import QuienesSomos from './components/QuienesSomos.jsx'
import InicioSesi from './Paginas/InicioSesi.jsx'
import PaginaHombre from './Paginas/PaginaHombre.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicio/>
  },
  {
    path: "/Registro",
    element: <Registro/>
  },
  {
    path: "/InicioSesi",
    element: <InicioSesi/>
  },
  {
    path: "/QuienesSomos",
    element: <QuienesSomos/>
  },
  {
    path: "/home",
    element: <PaginaPrincipal/>
  },
  {
    path: "/Contacto",
    element: <Contacto/>
  },
  {
    path: "/QuienesSomos",
    element: <QuienesSomos/>
  },
  {
    path: "/PaginaPrincipal",
    element: <QuienesSomos/>
  },
  {
    path: "/PaginaHombre",
    element: <PaginaHombre/>
  },
  {
    path: "/PaginaHombres",
    element: <PaginaHombre/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
