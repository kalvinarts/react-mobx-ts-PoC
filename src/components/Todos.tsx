import { observer } from "mobx-react-lite";
import { useStore } from "../providers/StoreProvider";

const Todos = observer(function Todos() {
  const store = useStore();

  return (
    <div>
      {store.todos.length === 0 ? <p>No todos means you are free</p> : (
        <table>
          <tbody>
            {store.todos.map((todo) => (
              <tr key={todo.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => store.toggleTodo(todo.id)}
                  />
                </td>
                <td>
                  <input
                    value={todo.text}
                    onChange={(e) => store.editTodo(todo.id, e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => store.removeTodo(todo.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
});

export default Todos;
