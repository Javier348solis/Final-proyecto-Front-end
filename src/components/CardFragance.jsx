const CardFragance=({src,titulo,precio})=>{
    return(
        <>
        <div>
          <img width={"200px"} src={src} alt="" /> 
          <h2 className="text-success">{titulo}</h2>
          <span className="text-info">{precio}</span>
          </div>
        </>
    )
}
export default CardFragance