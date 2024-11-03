import { observer } from "mobx-react-lite";
import { useStore } from "../providers/StoreProvider";

const ActionsBar = observer(function ActionsBar() {
  const store = useStore();

  return (
    <fieldset className="grid">
      <button onClick={store.loadTodos}>Load</button>
      <button onClick={store.saveTodos}>Save</button>
    </fieldset>
  );
});

export default ActionsBar;
