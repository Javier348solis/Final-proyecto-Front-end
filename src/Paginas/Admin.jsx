import InputPaginas from "../components/InputPaginas";
import { guardarUser } from "../services/Fetch";
import { useState } from "react";
const Admin = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [marcaProducto, setMarcaProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [cantidadMililitros, setPrecioMililitros] = useState(0);

  const aggProducto = async () => {
    const colonia = {
      nombre: nombreProducto,
      marca: marcaProducto,
      precio: precioProducto,
      cantidadml: cantidadMililitros,
    };
    await guardarUser(colonia, "productos")
  }
  return (
    <>
      <div className="d-flex flex-column">
        <div className="Input-file">
          <input type="file" placeholder="Escoger archivo"  />
          <input type="text" placeholder="Nombre del producto"  onChange={(e)=>setNombreProducto(e.target.value)}/>
          <input type="text" placeholder="Marca del producto" onChange={(e)=>setMarcaProducto(e.target.value)} />
          <input type="text" placeholder="Precio" onChange={(e)=>setPrecioProducto(e.target.value)} />
          <input type="number" placeholder="Cantidad en mililitros" onChange={(e)=>setPrecioMililitros(e.target.value)} />
          <button onClick={aggProducto}>Agregar Producto</button>
        </div>
      </div>
    </>
  );
};
export default Admin;
