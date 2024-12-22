import { ToolTip } from "../utils";

import { Patrol } from "../types";

import "./patrol-view.component.css";

interface PatrolViewParams {
  patrol: Patrol;
}

export default function PatrolView({ patrol }: PatrolViewParams) {
  return (
    <div className="patrol-view">
      <div className="patrol-name">{patrol.name}</div>
      <div className="range-wrapper">
        <div className="range-lables">
          {patrol.route.map((position) => [
            <ToolTip
              className="range-lable"
              text={`x: ${position.x}, y: ${position.y}`}
            >
              <p>&diams;</p>
            </ToolTip>,
            <span className="range-lable-filler" />,
          ])}
        </div>
        <input
          type="range"
          className="patrol-progress"
          min={0}
          max={1}
          step={0.01}
          defaultValue={patrol.progress}
          disabled
        />
      </div>
      <button className="patrol-reset">&#x21bb;</button>
    </div>
  );
}
