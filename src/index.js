import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

root.render(<App />);
