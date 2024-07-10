import CardFragance from "./CardFragance"

const ListaCard=({colonias})=>{
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
            />
        ))}
        </>
    )
}
export default ListaCard