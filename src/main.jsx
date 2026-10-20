import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1>Carvalho Soluções em Auditoria</h1>
      <p>Nova estrutura do site em preparação.</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
