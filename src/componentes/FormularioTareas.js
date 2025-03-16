import React, { useState } from 'react';

function FormularioTareas({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Escribe una Tarea'
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default FormularioTareas;