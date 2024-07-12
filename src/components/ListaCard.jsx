import CardFragance from "./CardFragance"

const ListaCard=({colonias, btnEliminar,mostrar})=>{
    return(
        <>
        {colonias.map(iterar=>(
            <CardFragance
            key={iterar.id}
            marca={iterar.marca}
            src={iterar.img}
            precio={iterar.precio}
            nombre={iterar.nombre}
            cantidadml={iterar.cantidadml}
            btnEliminar ={()=>btnEliminar(iterar.id)}
            mostrar={mostrar}
            />
        ))}
        </>
    )
}
export default ListaCard