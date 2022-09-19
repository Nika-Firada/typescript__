import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RGBContextProvider } from "./context";
import "./styles.scss";
import { ThemeProvider } from "./theme-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RGBContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RGBContextProvider>
  </React.StrictMode>
);
