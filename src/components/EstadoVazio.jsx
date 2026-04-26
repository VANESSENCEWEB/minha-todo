// Componente reutilizável para mostrar quando não há tarefas

function EstadoVazio({ icone, mensagem, dica }) {
  return (
    <div className="vazio">
      {icone && <div className="vazio-icone">{icone}</div>}
      <p>{mensagem}</p>
      {dica && <small>{dica}</small>}
    </div>
  );
}

export default EstadoVazio;