import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useParams } from "react-router-dom";
import { lista } from "./resources.json";

import reportWebVitals from "./reportWebVitals";
import Root from "./Root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();
