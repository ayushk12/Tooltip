import React from "react";
import Tippy from "@tippy.js/react";

import "./App.css";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return <span style={{ color: "red" }}>Colored component</span>;
};

function App() {
  return (
    <div className="App">
      <div style={{ paddingBottom: "200px" }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          "Dont Press">
          <button>CLICK ME</button>
        </Tippy>
      </div>
    </div>
  );
}

export default App;
