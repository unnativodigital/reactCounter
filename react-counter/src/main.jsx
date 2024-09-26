import React from "react";
import { createRoot } from "react-dom/client";
import SecondsCounter from "./SecondsCounter"; // Sin .jsx
import "./App.css"; // Asegúrate de que exista

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondsCounter />
  </React.StrictMode>,
);
