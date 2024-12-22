import { useState } from "react";

import { Patrol } from "../types";

import PatrolView from "./patrol-view.component";

import "./controller.component.css";

export default function Controller() {
  const [patrols, setPatrols] = useState<Patrol[]>([
    {
      name: "Zenko",
      route: [
        { x: 0, y: 0 },
        { x: 0, y: 10 },
        { x: 10, y: 10 },
        { x: 10, y: 0 },
      ],
      progress: 0,
    },
    {
      name: "Cat Miaumiaumiau",
      route: [
        { x: 0 + 20, y: 0 },
        { x: 0 + 20, y: 10 },
        { x: 10 + 20, y: 10 },
        { x: 15 + 20, y: 10 },
        { x: 10 + 20, y: 0 },
      ],
      progress: 0.6,
    },
  ]);

  console.log(patrols, setPatrols);

  return (
    <div>
      Use the Patrol-Tool to select a Character and set a Route for them.
      <fieldset className="patrol-views">
        <legend> Patrols</legend>
        {patrols.map((patrol) => (
          <PatrolView patrol={patrol} />
        ))}
      </fieldset>
    </div>
  );
}
