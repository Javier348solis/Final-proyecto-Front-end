import React from 'react'
import CardFragance from '../components/CardFragance'

function PaginaHombre() {
  return (
    <div className='Fotos-Hombre' >
      <CardFragance src={"src/Images/Azzaro.jpg"} titulo={"A01"} precio={"30.000"}/>
      <CardFragance src={"src/Images/profondo.jpg"} titulo={"A01"} precio={"30.000"}/>
      <CardFragance src={"src/Images/Invictus.jpg"} titulo={"A01"} precio={"30.000"}/>
      <CardFragance src={"src/Images/One.jpg"} titulo={"A01"} precio={"30.000"}/>
    </div>
  )
}

export default PaginaHombre
