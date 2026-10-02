import FormularioActividad from "./FormularioActividad";

function AdminActividades() {
  function guardar(actividad) {
    console.log("Actividad guardada:", actividad);
  }

  return (
    <main className="container py-4">
      <h1>Administración de actividades</h1>
      <FormularioActividad onGuardar={guardar} />
    </main>
  );
}

export default AdminActividades;

