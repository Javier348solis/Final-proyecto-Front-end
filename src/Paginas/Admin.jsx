import InputPaginas from "../components/InputPaginas";
import { guardarUser } from "../services/Fetch";
import { useState } from "react";
const Admin = () => {
  //Utilizamos el useState para actualizar, de igual forma se hace con el set
  const [nombreProducto, setNombreProducto] = useState("");
  const [marcaProducto, setMarcaProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  
  const [categoria, setCategoria] = useState();
  const [img,setImg]=useState()
  //Se define el valor de cada uno de mis espacios en el form
  const aggProducto = async () => {
    const colonia = {
      nombre: nombreProducto,
      marca: marcaProducto,
      precio: precioProducto,
     
      img:img,
      categoria: categoria
    }
    await guardarUser(colonia, "productos")
  }
  //Esta funcion es para manejar la carga de archivos del input al form leyendo y cargando los archivos
  const handleImage = (e) => {
    const file = document.getElementById("upload-file").files[0];
    const reader = new FileReader();
    if (file) {
        reader.onload = function(e) {
            setImg(e.target.result);
           
        };
        reader.readAsDataURL(file);
        alert("Foto agregada con exito")
    }
};
  return (
    <>
      <div className="d-flex-flex-column">
        <div className="Input-file">
        <input className='file' id="upload-file" accept="image/x-png,image/gif,image/jpeg" type="file" onChange={handleImage}/>
          <input type="text" placeholder="Nombre del producto"  onChange={(e)=>setNombreProducto(e.target.value)}/>
          <input type="text" placeholder="Marca del producto" onChange={(e)=>setMarcaProducto(e.target.value)} />
          <input type="text" placeholder="Precio" onChange={(e)=>setPrecioProducto(e.target.value)} />
          
          <select  onChange={(e)=>setCategoria(e.target.value)} className="border border-danger">
            <option selected disabled value="">Seleccione</option>
            <option value="Hombre">Perfume</option>
          </select>
          <button onClick={aggProducto}>Agregar Producto</button>
        </div>
      </div>
    </>
  );
};
export default Admin;
 