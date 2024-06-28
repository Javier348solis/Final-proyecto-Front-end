import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PaginaInicio from './PaginaInicio.jsx'
import Registro from './Registro.jsx'
import PaginaPrincipal from './PaginaPrincipal.jsx'

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
    element: <PaginaPrincipal/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
