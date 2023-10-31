import React, { StrictMode } from "react";
import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
