const CardFragance=({src,nombre,marca,precio,cantidadml})=>{
    return(
        <>
        <div>
          <img width={"200px"} height={"200"} src={src} alt="" /> 
          <h2 className="text-success">{nombre}</h2>
          <h2 className="text-success">{marca}</h2>
          <span className="text-info">{precio}</span>
          <span className="text-info">{cantidadml}</span>
          </div>
        </>
    )
}
export default CardFragance