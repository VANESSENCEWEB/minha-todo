// Componente que mostra os botões de filtro (Todas, Ativas, Concluídas)

function Filtros({ filtro, onFiltroChange, totalTodas, totalAtivas, totalConcluidas }) {
  return (
    <div className="filtros">
      <button
        className={filtro === "todas" ? "ativo" : ""}
        onClick={() => onFiltroChange("todas")}
      >
        Todas ({totalTodas})
      </button>
      <button
        className={filtro === "ativas" ? "ativo" : ""}
        onClick={() => onFiltroChange("ativas")}
      >
        Ativas ({totalAtivas})
      </button>
      <button
        className={filtro === "concluidas" ? "ativo" : ""}
        onClick={() => onFiltroChange("concluidas")}
      >
        Concluídas ({totalConcluidas})
      </button>
    </div>
  );
}

export default Filtros;