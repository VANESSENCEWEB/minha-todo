import { useState } from 'react';

// Recebe a função onAdicionar (callback) como prop
function FormularioTarefa({ onAdicionar }) {
  // Estado LOCAL deste componente: o texto digitado
  const [input, setInput] = useState("");

  function handleAdicionar() {
    if (input.trim() !== "") {
      onAdicionar(input.trim()); // chama a função do componente pai
      setInput("");               // limpa o input
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdicionar();
  }

  return (
    <div className="entrada">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="O que você precisa fazer?"
      />
      <button onClick={handleAdicionar} className="btn-adicionar">
        + Adicionar
      </button>
    </div>
  );
}

export default FormularioTarefa;