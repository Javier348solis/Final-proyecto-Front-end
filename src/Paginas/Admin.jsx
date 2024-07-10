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
    }
    await guardarUser(colonia,"productos")
  }
  const admin = localStorage.getItem("admin")
  return (
    <>
      <div className="d-flex flex-column">
        <InputPaginas aggProducto={aggProducto} />
      </div>
    </>
  );
};
export default Admin;
