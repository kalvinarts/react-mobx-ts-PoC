import { observer } from "mobx-react-lite";
import { useStore } from "../providers/StoreProvider";
import css from "../css"; 

const { fieldsetStyle, checkboxStyle } = css;

const Todos = observer(function Todos() {
  const { todos } = useStore();

  return (
    <div>
      {todos.todos.length === 0
        ? <p>No todos means you are free</p>
        : (
          <section>
            {todos.todos.map((todo) => (
              <fieldset role="group" key={todo.id} style={fieldsetStyle}>
                <input
                  style={checkboxStyle}
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => todos.toggleTodo(todo.id)}
                />
                <input
                  value={todo.text}
                  onChange={(e) => todos.editTodo(todo.id, e.target.value)}
                />
                <button onClick={() => todos.removeTodo(todo.id)}>X</button>
              </fieldset>
            ))}
          </section>
        )}
    </div>
  );
});

export default Todos;
