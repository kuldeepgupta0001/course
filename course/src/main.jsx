import React, { StrictMode } from "react";
import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App.jsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>
);
