import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../Theme.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  </MantineProvider>
);
