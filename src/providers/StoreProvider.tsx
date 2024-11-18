/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from "react";
import todoStore from "../stores/TodosStore";

// Add your stores here
const stores = {
  todos: todoStore,
};

const StoreContext = createContext<typeof stores>(stores);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useContext(StoreContext);
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext);
};

export default StoreProvider;
export { useStore };
