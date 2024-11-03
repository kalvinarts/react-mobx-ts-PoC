import Todos from "./components/Todos";
import ActionsBar from "./components/ActionsBar.tsx";
import AddTodo from "./components/AddTodo.tsx";

const titleStyle = { marginTop: '1rem' };

function App() {
  return (
    <main className="container">
      <h1 style={titleStyle}>Todos</h1>
      <AddTodo />
      <ActionsBar />
      <Todos />
    </main>
  );
}

export default App;
