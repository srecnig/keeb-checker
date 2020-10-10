import React, { useState } from "react";

import useEventListener from "@use-it/event-listener";

import "./App.css";

const useDetectKeypress = () => {
  const [keyPress, setKeyPress] = useState([null, null]);

  useEventListener("keydown", ({ code, key }) => {
    setKeyPress([code, key]);
  });

  useEventListener("keyup", ({ code, key }) => {
    setKeyPress([null, null]);
  });

  return keyPress;
};

function KeyPress({code, value}) {
  return (
    <React.Fragment>
      <div className="keypress">{code}</div>
      <div className="keypress">{value}</div>
    </React.Fragment>
  )
}

function Key({ label, size = 1, status = "pristine" }) {
  const className = `key key--${status}`
  return (
    <div className={className}>{label}</div>
  )
}

function App() {
  const [code, key] = useDetectKeypress();

  return (
    <div className="App">
        <KeyPress code={code} value={key} />
        <hr />
        <Key label="W" />
        <Key label="A" />
        <Key label="S" />
        <Key label="D" />
    </div>
  );
}

export default App;


