import { useEffect, useState } from "react";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Cartelera from "./pages/Cartelera";
import { actividades } from "./data/actividades";
import MisInscripciones from "./pages/MisInscripciones";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Actividades from "./pages/Actividades";
import DetalleActividad from "./pages/DetalleActividad";
import AdminActividades from "./pages/admin/AdminActividades";
import NoEncontrada from "./pages/NoEncontrada";


function App() {
  const [categoria, setCategoria] = useState("Todas");

  const visibles = categoria === "Todas"
    ? actividades
    : actividades.filter((actividad) => actividad.categoria === categoria);

  const [inscripciones, setInscripciones] = useState(() => {
    const guardadas = localStorage.getItem("inscripciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  function inscribir(actividad) {
    const yaExiste = inscripciones.some((item) => item.id === actividad.id);

    if (yaExiste) return;

    setInscripciones([...inscripciones, actividad]);
  }

  function eliminarInscripcion(id) {
    setInscripciones(
      inscripciones.filter((item) => item.id !== id)
    );
  }

  useEffect(() => {
    localStorage.setItem(
      "inscripciones",
      JSON.stringify(inscripciones)
    );
  }, [inscripciones]);


  return (
    <>
      <Cabecera />
      <Navegacion />
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/actividades" element={<Actividades />} />
      <Route path="/actividades/:id" element={<DetalleActividad />} />
      <Route path="/admin/actividades" element={<AdminActividades />} />
      <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </>
  );
}

export default App;

