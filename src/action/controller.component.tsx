import { useState } from "react";

function Controller() {
  const [patrols, setPatrols] = useState<string[]>([]);

  console.log(patrols, setPatrols);

  return <div>Test</div>;
}

export default Controller;
