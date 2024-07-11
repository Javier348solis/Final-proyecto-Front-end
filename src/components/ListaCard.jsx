import CardFragance from "./CardFragance"

const ListaCard=({colonias, btnEliminar})=>{
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
            />
        ))}
        </>
    )
}
export default ListaCard