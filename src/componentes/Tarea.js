import React, { useState } from 'react';

function Tarea({ tarea, editarTarea, eliminarTarea, completarTarea }) {
    const [modoEdicion, setModoEdicion] = useState(false);
    const [texto, setTexto] = useState(tarea.texto);
  
    return (
      <div className='tarea'>
        <div>
          <input 
            type="checkbox" 
            checked={tarea.completada} 
            onChange={() => completarTarea(tarea.id)} 
            className='checkbox'
          />
          {modoEdicion ? (
            <input
              type="text"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              className='textoTareaInput'
            />
          ) : (
            <span className='textoTarea'>{tarea.texto}</span>
          )}
        </div>
        <div className='botones'>
          {modoEdicion ? (
            <button
              onClick={() => {
                editarTarea(tarea.id, texto);
                setModoEdicion(false);
              }}
              className='actualizar'
            >
                Actualizar
            </button>
          ) : (
            <button onClick={() => setModoEdicion(true)} className='editar'>
              Editar
            </button>
          )}
          <button onClick={() => eliminarTarea(tarea.id)} className='eliminar'>
            <span>+</span>
          </button>
        </div>
      </div>
    );
  }

  export default Tarea;