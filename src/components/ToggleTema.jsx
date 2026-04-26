// Botão que alterna entre tema claro e escuro
function ToggleTema({ tema, onToggle }) {
  return (
    <button
      className="toggle-tema"
      onClick={onToggle}
      title={tema === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      aria-label="Alternar tema"
    >
      {tema === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

export default ToggleTema;