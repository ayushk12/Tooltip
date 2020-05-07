import React from "react";
import { Tooltip } from "react-tippy";

import "./App.css";
import "react-tippy/dist/tippy.css";

function App(props) {
  return (
    <div className="App">
      {console.log(props.position)}
      <div style={{ paddingTop: "50vh" }}>
        <Tooltip title="Dont Press" position={props.position}>
          <button class="press">PRESS</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
