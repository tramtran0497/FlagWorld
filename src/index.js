import React from "react";
import ReactDOM from "react-dom";
import "./SCSS/index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ThemeProvider from "./useContext/ThemeContext";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
