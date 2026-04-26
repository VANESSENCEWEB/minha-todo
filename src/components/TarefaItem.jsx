// Componente para um item individual da lista

function TarefaItem({ tarefa, onAlternar, onRemover }) {
  return (
    <li className={tarefa.concluida ? "concluida" : ""}>
      <label className="check-container">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={onAlternar}
        />
        <span className="checkmark"></span>
      </label>

      <span className="texto">{tarefa.texto}</span>

      <button
        className="remover"
        onClick={onRemover}
        title="Remover tarefa"
      >
        🗑️
      </button>
    </li>
  );
}

export default TarefaItem;