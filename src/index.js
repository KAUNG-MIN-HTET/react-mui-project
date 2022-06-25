// import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { style } from "./style";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={style}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
