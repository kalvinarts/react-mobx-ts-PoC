import Todos from "./components/Todos";
import ActionsBar from "./components/ActionsBar.tsx";
import AddTodo from "./components/AddTodo.tsx";

function App() {
  return (
    <div>
      <h2>Todos</h2>
      <AddTodo />
      <Todos />
      <ActionsBar />
    </div>
  );
}

export default App;
