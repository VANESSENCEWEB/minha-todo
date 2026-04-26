import { useState, useEffect } from 'react';
import './App.css';
import FormularioTarefa from './components/FormularioTarefa';
import Filtros from './components/Filtros';
import ListaTarefas from './components/ListaTarefas';
import EstadoVazio from './components/EstadoVazio';
import ToggleTema from './components/ToggleTema';

function App() {
  // ESTADO PRINCIPAL: lista de tarefas. Cada tarefa é { texto, concluida }
  const [tarefas, setTarefas] = useState([]);
  // Filtro atual: 'todas', 'ativas' ou 'concluidas'
  const [filtro, setFiltro] = useState("todas");

  // Estado do tema: começa com a preferência do sistema (ou o salvo no navegador)
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem('tema');
    if (salvo) return salvo;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Aplica o tema ao HTML e salva no navegador toda vez que mudar
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema', tema);
  }, [tema]);

  function alternarTema() {
    setTema(tema === 'dark' ? 'light' : 'dark');
  }

  // Adiciona uma nova tarefa ao final da lista
  function adicionarTarefa(texto) {
    setTarefas([...tarefas, { texto, concluida: false }]);
  }

  // Marca/desmarca uma tarefa como concluída
  function alternarConcluida(indice) {
    setTarefas(
      tarefas.map((t, i) =>
        i === indice ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  // Remove uma tarefa pelo índice
  function removerTarefa(indice) {
    setTarefas(tarefas.filter((_, i) => i !== indice));
  }

  // Remove todas as tarefas concluídas de uma vez
  function limparConcluidas() {
    setTarefas(tarefas.filter((t) => !t.concluida));
  }

  // Calcula contadores
  const totalAtivas = tarefas.filter((t) => !t.concluida).length;
  const totalConcluidas = tarefas.length - totalAtivas;

  // Aplica o filtro selecionado
  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "ativas") return !t.concluida;
    if (filtro === "concluidas") return t.concluida;
    return true;
  });

  return (
    <div className="container">
     <header>
        <ToggleTema tema={tema} onToggle={alternarTema} />
        <h1>
          <span className="emoji">✨</span>
          Minhas Tarefas
        </h1>
        <p className="subtitulo">Organize seu dia, uma tarefa por vez</p>
      </header>

      <FormularioTarefa onAdicionar={adicionarTarefa} />

      {tarefas.length > 0 && (
        <Filtros
          filtro={filtro}
          onFiltroChange={setFiltro}
          totalTodas={tarefas.length}
          totalAtivas={totalAtivas}
          totalConcluidas={totalConcluidas}
        />
      )}

      {tarefas.length === 0 ? (
        <EstadoVazio
          icone="📋"
          mensagem="Nenhuma tarefa ainda"
          dica="Adicione a primeira acima ☝️"
        />
      ) : tarefasFiltradas.length === 0 ? (
        <EstadoVazio mensagem="Nenhuma tarefa nesse filtro" />
      ) : (
        <ListaTarefas
          tarefas={tarefas}
          tarefasFiltradas={tarefasFiltradas}
          onAlternar={alternarConcluida}
          onRemover={removerTarefa}
        />
      )}

      {totalConcluidas > 0 && (
        <button className="btn-limpar" onClick={limparConcluidas}>
          Limpar {totalConcluidas} concluída{totalConcluidas > 1 ? "s" : ""}
        </button>
      )}

      <footer>Feito com 💜 em React</footer>
    </div>
  );
}

export default App;