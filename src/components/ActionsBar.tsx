import { observer } from "mobx-react-lite";
import { useStore } from "../providers/StoreProvider";
import css from "../css"; 

const { fieldsetStyle, checkboxStyle } = css;

const ActionsBar = observer(function ActionsBar() {
  const { todos } = useStore();

  return (
    <fieldset className="grid" style={fieldsetStyle}>
      <fieldset style={fieldsetStyle}>
        <input
          type="checkbox"
          style={checkboxStyle}
          checked={todos.autoSave}
          onChange={todos.toggleAutoSave}
        />AutoSave
      </fieldset>
      <button onClick={todos.loadTodos}>Load</button>
      <button onClick={todos.saveTodos} disabled={todos.autoSave} >Save</button>
    </fieldset>
  );
});

export default ActionsBar;
