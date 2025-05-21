// Import React dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Create root and render the app with StrictMode for better development experience
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
