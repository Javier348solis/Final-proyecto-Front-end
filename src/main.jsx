import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PaginaInicio from './PaginaInicio.jsx'
import Registro from './Registro.jsx'
import PaginaPrincipal from './PaginaPrincipal.jsx'
import Contacto from './BarraNavBar/Contacto'
import QuienesSomos from './BarraNavBar/QuienesSomos'
import InicioSesi from './InicioSesi.jsx'

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
    path: "/Contacto",
    element: <Contacto/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
