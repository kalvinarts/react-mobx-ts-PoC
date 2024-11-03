import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@picocss/pico/css/pico.min.css';
import App from "./App.tsx";
import StoreProvider from "./providers/StoreProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
