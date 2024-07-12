import React, { useEffect, useState } from 'react'
import CardFragance from '../components/CardFragance'
import InputPaginas from '../components/InputPaginas'
import ListaCard from '../components/ListaCard'
import getData from '../services/Fetch'
import NavBar from '../components/NavBar'
import { deleteProduct } from "../services/Fetch";
function PaginaHombre() {
  const [data,setData]=useState([])
  const [recarga,setRecarga]=useState(false)
  useEffect(()=>{
    const traerDatos = async()=>{
      const datitos = await getData("productos")
      setData(datitos) 
    }
    traerDatos()
  },[recarga])
  async function deletePerfume(id) {
    try {
        await deleteProduct(id);
        
    alert("Producto eliminado con exito")
        console.log(`Producto con id ${id} eliminado correctamente.`);
        recargaPagina()
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        
    }
  }
  const recargaPagina=()=>{
    setRecarga(!recarga)
  }


  return (
    <>
    <NavBar/>
      <h1 className='text-center bg-transparent'>Productos destacados</h1>
    <div className='Fotos-Hombre mx-auto d-flex ' >
      <CardFragance src={"src/Images/Azzaro.jpg"} titulo={"Azzaro wanted EDT"} precio={"55.000"}/>
      <CardFragance src={"src/Images/profondo.jpg"} titulo={"ADG Profondo Parfum"} precio={"80.000"}/>
      <CardFragance src={"src/Images/Invictus.jpg"} titulo={"Invictus Parfum PR"} precio={"65.000"}/>
      <CardFragance src={"src/Images/One.jpg"} titulo={"One Million PR EDT"} precio={"44.000"}/>
    </div>
    <hr className='bg-transparent'/>
    <div className='d-flex flex-wrap gap-3 mx-auto justifiy-content-center'>
     <ListaCard colonias={data} btnEliminar={deletePerfume} mostrar={true}/>
     </div>
    </>
  )
}

export default PaginaHombre
