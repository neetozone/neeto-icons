import React from "react";
import { createRoot } from "react-dom/client";

import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";
import "../../node_modules/@bigbinary/neetoui/dist/index.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  </React.StrictMode>
);
