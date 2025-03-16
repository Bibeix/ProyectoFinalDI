function Header({ setFiltroCompletadas, filtroCompletadas }) {
  return (
    <header>
      <h1>Lista de Tareas</h1>
      <button
        onClick={() => setFiltroCompletadas(!filtroCompletadas)}
      >
        {filtroCompletadas ? "Mostrar Todas" : "Mostrar No Completadas"}
      </button>
    </header>
  );
}

export default Header;