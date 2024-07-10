import CardFragance from "./CardFragance"

const ListaCard=({colonias})=>{
    return(
        <>
        {colonias.map(iterar=>(
            <CardFragance
            key={iterar.id}
            src={iterar.img}
            precio={iterar.precio}
            titulo={iterar.nombre}
            cantidadMl={iterar.cantidadml}
            />
        ))}
        </>
    )
}
export default ListaCard