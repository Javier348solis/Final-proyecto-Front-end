import React, { useState } from 'react'

function InputPaginas({aggProducto}) {
  
  
  return (
    <>
    <div className='Input-file'>
    <input type="file" placeholder='Escoger archivo'/>
    <input type="text" placeholder='Nombre del producto'/>
    <input type="text" placeholder='Marca del producto'/>
    <input type="text" placeholder='Precio'/>
    <input type="number" placeholder='Cantidad en mililitros'/> 
    <button onClick={aggProducto}>Agregar Producto</button> 
    </div>
    </>
  )
}

export default InputPaginas
