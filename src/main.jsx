// src/main.jsx
//CSS IMPORTS
// import "./index.css";
// import "@picocss/pico/css/pico.min.css";
// import "./styles/main.scss";
// IMPORTS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; // add import for BrowserRouter
import { UserProvider } from "./contexts/UserContext.jsx";


import App from "./App.jsx";

// Wrap the App component with the BrowserRouter component to enable
// enable route handling throughout your application.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
