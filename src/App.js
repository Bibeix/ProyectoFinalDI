import { useState } from "react";
import './styles/App.css';
import Header from './componentes/Header.js'
import FormularioTareas from "./componentes/FormularioTareas.js";
import ListaTareas from "./componentes/ListaTareas.js";

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtroCompletadas, setFiltroCompletadas] = useState(false);

  const agregarTarea = (texto) => {
    setTareas([...tareas, { id: Date.now(), texto, completada: false }]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const editarTarea = (id, nuevoTexto) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
      )
    );
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div>
      <Header setFiltroCompletadas={setFiltroCompletadas} filtroCompletadas={filtroCompletadas} />
      <FormularioTareas agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        filtroCompletadas={filtroCompletadas}
        editarTarea={editarTarea}
        eliminarTarea={eliminarTarea}
        completarTarea={completarTarea}
      />
    </div>
  );
}

export default App;