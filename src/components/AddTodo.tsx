import { observer } from "mobx-react-lite";
import { useStore } from "../providers/StoreProvider";

const AddTodo = observer(function AddTodo() {
  const { todos } = useStore();

  // BLAME: This is a TS problem, not a mobx-react-lite problem
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoText = Array.from((e.target as HTMLFormElement).elements)
      .find((el) => {
        const element = (el as HTMLInputElement)
        return (element.name === 'todoText')
      }) as HTMLInputElement | undefined;
    if (!todoText || !todoText.value) return;
    todos.addTodo(todoText.value);
    todoText.value = '';
  };

  return (
    <form role="form" onSubmit={handleSubmit}>
      <fieldset role="group">
        <input
          name="todoText"
          type="text"
        />
        <button
          type="submit"
        >
          Add
        </button>
      </fieldset>
    </form>
  );
});

export default AddTodo;
