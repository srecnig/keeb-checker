import React, { useState } from "react";

import useEventListener from "@use-it/event-listener";

import "./App.css";

const useKeyDown = () => {
  const [keyPress, setKeyPress] = useState(["", ""]);

  useEventListener("keydown", ({ code, key }) => {
    setKeyPress([code, key]);
  });

  return keyPress;
};

function App() {
  const [code, key] = useKeyDown();

  return (
    <div className="App">
      <p>
        OHAI MARK: {code},{key}
      </p>
    </div>
  );
}

export default App;
