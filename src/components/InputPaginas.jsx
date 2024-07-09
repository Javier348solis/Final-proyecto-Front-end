import React from 'react'

function InputPaginas() {
  return (
    <>
    <div className='Input-file'>
    <input type="file" placeholder='Escoger archivo'/>
    <input type="text" placeholder='Nombre del producto'/>
    <input type="text" placeholder='Precio'/>
    <input type="number" placeholder='Cantidad en mililitros'/> 
    <button>Agregar Producto</button> 
    </div>
    </>
  )
}

export default InputPaginas
