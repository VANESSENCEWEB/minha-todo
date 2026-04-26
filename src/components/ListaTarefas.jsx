import TarefaItem from './TarefaItem';

// Renderiza a lista de tarefas. Recebe o array original (tarefas) para descobrir o
// índice real, e o array filtrado (tarefasFiltradas) que será exibido.

function ListaTarefas({ tarefas, tarefasFiltradas, onAlternar, onRemover }) {
  return (
    <ul>
      {tarefasFiltradas.map((tarefa) => {
        const indiceReal = tarefas.indexOf(tarefa);
        return (
          <TarefaItem
            key={indiceReal}
            tarefa={tarefa}
            onAlternar={() => onAlternar(indiceReal)}
            onRemover={() => onRemover(indiceReal)}
          />
        );
      })}
    </ul>
  );
}

export default ListaTarefas;