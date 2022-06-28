import App from "./App";
import "./sass/main.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FcontextProvider from "./store/FcontextProvider";
const root = createRoot(document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

root.render(
  <FcontextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FcontextProvider>
);
