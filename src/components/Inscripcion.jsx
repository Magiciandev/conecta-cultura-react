function Inscripcion({ inscripcion, onEliminar }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{inscripcion.nombre}</h2>
        <p>{inscripcion.categoria}</p>
        <button
          className="btn btn-danger"
          onClick={() => onEliminar(inscripcion.id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default Inscripcion;