import React from "react";
import ReactDOM from "react-dom";
import "./SCSS/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ThemeProvider from "./useContext/ThemeContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
