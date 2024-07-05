import React from 'react'
import CarouselC from '../components/CarouselC'
import NavBar from '../components/NavBar'
import PiedePagina from '../components/PiedePagina'

function PaginaPrincipal() {
  //hacer la logica de la pagina principal de la barra de busqueda. Hacer un get de todos los datos que se encuentran en el servidor. 
  // Cuando tengo los datos del servidor, cargo los datos del input con un hook *Se hace con un filter
  return (
    <>
    <NavBar/>
    <br />
    <CarouselC/>
    <br />
    <PiedePagina/>
    </>
  )
}

export default PaginaPrincipal
