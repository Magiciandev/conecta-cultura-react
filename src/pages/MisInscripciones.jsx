import Inscripciones from "../components/Inscripcion";

function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <div className="row g-4">
      {inscripciones.map((inscripcion) => (
        <div className="col-12 col-md-6 col-lg-4" key={inscripcion.id}>
          <Inscripcion
            inscripcion={inscripcion}
            onEliminar={onEliminar}
          />
        </div>
      ))}
    </div>
  );
}

export default MisInscripciones;