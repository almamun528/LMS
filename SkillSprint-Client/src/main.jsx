import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./ReduxAPI/store.js";

createRoot(document.getElementById("root")).render(
  <section className="max-w-7xl mx-auto"> 
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </section>
);
