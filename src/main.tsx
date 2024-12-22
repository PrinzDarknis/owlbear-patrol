import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OBR from "@owlbear-rodeo/sdk";

import "./index.css";

import { Controller } from "./action";
import { createPatrolTool } from "./tool";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Controller />
  </StrictMode>
);

OBR.onReady(() => {
  createPatrolTool();
});
