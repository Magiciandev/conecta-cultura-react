import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const inicial = { nombre: "", categoria: "", cupos: "" };

function FormularioActividad({ onGuardar }) {
  const [datos, setDatos] = useState(inicial);
  const [errores, setErrores] = useState({});

  function cambiar(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevosErrores = {};

    if (!datos.nombre.trim()) nuevosErrores.nombre = "Nombre obligatorio";
    if (!datos.categoria) nuevosErrores.categoria = "Selecciona categoría";
    if (Number(datos.cupos) < 0) nuevosErrores.cupos = "No puede ser negativo";

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    onGuardar({ ...datos, cupos: Number(datos.cupos) });
    setDatos(inicial);
  }

  return (
    <Form onSubmit={enviar} noValidate>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="nombre" value={datos.nombre}
          onChange={cambiar} isInvalid={Boolean(errores.nombre)} />
        <Form.Control.Feedback type="invalid">
          {errores.nombre}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Guardar</Button>
    </Form>
  );
}

export default FormularioActividad;
