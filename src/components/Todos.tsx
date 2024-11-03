import { observer } from "mobx-react-lite";
import { useStore } from "../providers/StoreProvider";

const fieldsetStyle = {
  alignItems: 'center',
};

const checkboxStyle = {
  marginLeft: '.25rem',
};

const Todos = observer(function Todos() {
  const store = useStore();

  return (
    <div>
      {store.todos.length === 0
        ? <p>No todos means you are free</p>
        : (
          <section>
            {store.todos.map((todo) => (
              <fieldset role="group" key={todo.id} style={fieldsetStyle}>
                <input
                  style={checkboxStyle}
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => store.toggleTodo(todo.id)}
                />
                <input
                  value={todo.text}
                  onChange={(e) => store.editTodo(todo.id, e.target.value)}
                />
                <button onClick={() => store.removeTodo(todo.id)}>X</button>
              </fieldset>
            ))}
          </section>
        )}
    </div>
  );
});

export default Todos;
