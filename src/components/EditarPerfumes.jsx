import React from 'react'
import { actualizaDatos } from '../services/Fetch'
import { useState } from 'react'


function EditarPerfumes() {
    
    const [nombreProducto, setNombreProduct] = useState();
    const [marcaProducto, setMarcaProduct] = useState();
    const [precioProducto, setPrecioProduct] = useState();
    const [cantidadMililitros, setPrecioMililitros] = useState();

    const traerDatos = async ()=>{
    const productosEditar = {
        nombre: nombreProducto,
        marca: marcaProducto,
        precio: precioProducto,
        cantidadml: cantidadMililitros,
    }
      await actualizaDatos(id,productosEditar)
    }
  return (
    <>
     <input type="text" placeholder='Perfume' onChange={(e)=>setNombreProduct(e.target.value)}/>
     <input type="text" placeholder='Precio' onChange={(e)=>setMarcaProduct(e.target.value)}/> 
     <input type="text" placeholder='Marca' onChange={(e)=>setPrecioProduct(e.target.value)}/> 
     <input type="number" placeholder='Cantidad'onChange={(e)=>setPrecioMililitros(e.target.value)}/> 
     <button onClick={traerDatos}>Editar</button>
    </>

  )
}

export default EditarPerfumes
