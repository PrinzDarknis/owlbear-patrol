import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Controller from "./action/controller.component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Controller />
  </StrictMode>
);
