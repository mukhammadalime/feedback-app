import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./sass/main.scss";
const root = createRoot(document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
