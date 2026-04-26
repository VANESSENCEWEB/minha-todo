# 📝 Minha Lista de Tarefas (Todo List em React)

Projeto desenvolvido como atividade introdutória de **React**, abordando os conceitos de **componentes, JSX, props e o hook `useState`**.

## 🚀 Tecnologias

- **React 18**
- **Vite** (bundler ultra-rápido)
- **CSS puro** (sem frameworks)
- **JavaScript ES6+**

## 🎯 Funcionalidades

- ✅ Adicionar nova tarefa (botão ou tecla **Enter**)
- ✅ Marcar tarefa como concluída (riscando o texto)
- ✅ Remover tarefas individualmente
- ✅ Filtrar por **Todas / Ativas / Concluídas**
- ✅ Botão para limpar todas as concluídas de uma vez
- ✅ Contador dinâmico de tarefas
- ✅ Mensagens para estado vazio
- ✅ Animações suaves
- ✅ **Modo escuro automático** (segue o tema do sistema)
- ✅ **Design responsivo** (funciona bem em celular)

## 📂 Organização do Projeto

O código foi dividido em **componentes pequenos e focados**, cada um com sua responsabilidade:

```
src/
├── App.jsx                       # Componente raiz - gerencia o estado principal
├── App.css                       # Estilos do app
├── main.jsx                      # Ponto de entrada do React
└── components/
    ├── FormularioTarefa.jsx      # Input + botão de adicionar
    ├── Filtros.jsx               # Botões Todas / Ativas / Concluídas
    ├── ListaTarefas.jsx          # A lista (<ul>) que renderiza os itens
    ├── TarefaItem.jsx            # Um item individual da lista
    └── EstadoVazio.jsx           # Mensagem quando não há tarefas
```

## 🧠 Conceitos aprendidos

### 1. JSX
JSX é uma extensão de sintaxe que **mistura JavaScript com uma estrutura parecida com HTML**. As principais diferenças do HTML:

- Usa `className` em vez de `class`
- Atributos em **camelCase** (ex: `onClick`, `onChange`, `onKeyDown`)
- Expressões JavaScript são interpoladas com **chaves** `{ }`
- Todo componente deve retornar **um único elemento raiz**

### 2. Componentes
Um componente é uma **função JavaScript que retorna JSX**. Pode ser reutilizado, recebe **props** (parâmetros) e fica responsável por uma parte da interface.

Exemplo: o `TarefaItem` recebe três props:
```jsx
<TarefaItem
  tarefa={tarefa}
  onAlternar={...}
  onRemover={...}
/>
```

### 3. Props
**Props** (propriedades) são como o componente filho recebe dados do componente pai. Permitem o fluxo de informação **de cima para baixo** na árvore de componentes.

### 4. Hook `useState`
`useState` permite que um componente **lembre de informações entre renderizações** (estado).

```jsx
const [tarefas, setTarefas] = useState([]);
```

- `tarefas` → o valor atual
- `setTarefas` → função que atualiza o valor e dispara nova renderização
- `[]` → valor inicial

Neste projeto, usamos `useState` em dois lugares:
- No `App.jsx` para guardar a lista de tarefas e o filtro selecionado
- No `FormularioTarefa.jsx` para guardar o texto sendo digitado

### 5. Manipulação imutável de arrays
No React, **nunca alteramos o estado diretamente**. Sempre criamos um **novo array**:

| Ação | Como fazer |
|---|---|
| Adicionar | `setTarefas([...tarefas, nova])` (spread operator) |
| Remover | `setTarefas(tarefas.filter((_, i) => i !== indice))` |
| Atualizar | `setTarefas(tarefas.map((t, i) => i === indice ? {...t, concluida: true} : t))` |

### 6. Renderização condicional
Usamos expressões JS dentro do JSX para mostrar coisas diferentes em situações diferentes:
```jsx
{tarefas.length === 0 ? <EstadoVazio /> : <ListaTarefas ... />}
```

### 7. `map()` para listas
Para transformar um array de dados em vários elementos JSX, usamos `.map()`. Cada item precisa de uma `key` única para o React identificá-lo.

## ▶️ Como rodar localmente

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

Depois acesse `http://localhost:5173` no navegador.

## 📦 Build para produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

## 🌐 Deploy

Site publicado em: **[colocar link do Vercel aqui]**

## 👤 Autora

Vanessa Rafaella