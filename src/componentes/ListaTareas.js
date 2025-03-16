import React, { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, filtroCompletadas, editarTarea, eliminarTarea, completarTarea }) {
    return (
      <div id='listaTareas'>
        {tareas
          .filter((t) => !filtroCompletadas || !t.completada)
          .map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              editarTarea={editarTarea}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          ))}
      </div>
    );
  }

  export default ListaTareas;