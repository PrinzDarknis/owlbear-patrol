import OBR from "@owlbear-rodeo/sdk";

import { TOOL_ID } from "../constants";

export function createPatrolTool() {
  OBR.tool.create({
    id: TOOL_ID,
    icons: [
      {
        icon: "/icon.svg",
        label: "Patrol Tool",
      },
    ],
  });
}
