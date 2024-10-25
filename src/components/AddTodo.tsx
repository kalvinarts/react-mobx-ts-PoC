import { observer } from "mobx-react-lite";
import { useStore } from "../providers/StoreProvider";

const AddTodo = observer(function AddTodo() {
  const store = useStore();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      store.addTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={store.todoText}
        onChange={(e) => store.setTodoText(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button onClick={store.addTodo}>
        Add Todo
      </button>
    </div>
  );
});

export default AddTodo;
