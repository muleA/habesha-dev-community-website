import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { AuthProvider } from "./shared/context/AuthContext";
import { theme } from "./shared/theme/theme";
import "./index.css";
import App from "./App";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>,
);
