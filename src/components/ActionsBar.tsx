import { observer } from "mobx-react-lite";
import { useStore } from "../providers/StoreProvider";

const ActionsBar = observer(function ActionsBar() {
  const store = useStore();

  return (
    <div>
      <button onClick={store.loadTodos}>Load</button>
      <button onClick={store.saveTodos}>Save</button>
    </div>
  );
});

export default ActionsBar;
