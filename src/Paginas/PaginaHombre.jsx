import React, { useEffect, useState } from 'react'
import CardFragance from '../components/CardFragance'
import InputPaginas from '../components/InputPaginas'
import ListaCard from '../components/ListaCard'
import getData from '../services/Fetch'
 
function PaginaHombre() {
  const [data,setData]=useState([])

  useEffect(()=>{
    const traerDatos = async()=>{
      const datitos = await getData("productos")
      setData(datitos) 
    }
    traerDatos()
  },[])
  return (
    <>
    <div className='Fotos-Hombre' >
      <CardFragance src={"src/Images/Azzaro.jpg"} titulo={"Azzaro wanted EDT"} precio={"₡55.000"}/>
      <CardFragance src={"src/Images/profondo.jpg"} titulo={"ADG Profondo Parfum"} precio={"₡80.000"}/>
      <CardFragance src={"src/Images/Invictus.jpg"} titulo={"Invictus Parfum PR"} precio={"₡65.000"}/>
      <CardFragance src={"src/Images/One.jpg"} titulo={"One Million PR EDT"} precio={"₡44.000"}/>
     <ListaCard colonias={data}/>
    </div>
      
    </>
  )
}

export default PaginaHombre
