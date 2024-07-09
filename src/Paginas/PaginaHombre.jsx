import React from 'react'
import CardFragance from '../components/CardFragance'
import InputPaginas from '../components/InputPaginas'

function PaginaHombre() {
  return (
    <>
    <div className='Fotos-Hombre' >
      <CardFragance src={"src/Images/Azzaro.jpg"} titulo={"Azzaro wanted EDT"} precio={"₡55.000"}/>
      <CardFragance src={"src/Images/profondo.jpg"} titulo={"ADG Profondo Parfum"} precio={"₡80.000"}/>
      <CardFragance src={"src/Images/Invictus.jpg"} titulo={"Invictus Parfum PR"} precio={"₡65.000"}/>
      <CardFragance src={"src/Images/One.jpg"} titulo={"One Million PR EDT"} precio={"₡44.000"}/>
     
    </div>
      
    </>
  )
}

export default PaginaHombre
