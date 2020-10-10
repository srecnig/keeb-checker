import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEventListener from "@use-it/event-listener";
import { setActive } from "./actions";
import { Ansi } from "./constants";

import "./App.css";

const useDetectKeypress = () => {
  const [keyPress, setKeyPress] = useState([null, null]);
  const dispatch = useDispatch();

  useEventListener("keydown", ({ code, key }) => {
    setKeyPress([code, key]);
  });

  useEventListener("keyup", ({ code, key }) => {
    dispatch(setActive(code));
    setKeyPress([null, null]);
  });

  return keyPress;
};

function KeyPress({ code, value }) {
  return (
    <React.Fragment>
      <div className="keypress">{code}</div>
      <div className="keypress">{value}</div>
    </React.Fragment>
  );
}

function Key({ label, size = 1, status = "pristine" }) {
  const className = `key key--${status}`;
  return <div className={className}>{label}</div>;
}

function App() {
  const [code, key] = useDetectKeypress();
  const keys = useSelector((store) => store.keys);
  const keyboard = Object.entries(keys).map(([code, status]) => ({
    key: code,
    label: Ansi[code],
    status: status,
  }));

  return (
    <div className="App">
      <KeyPress code={code} value={key} />
      <hr />
      {keyboard.map((key) => (
        <Key key={key.key} label={key.label} status={key.status} />
      ))}
    </div>
  );
}

export default App;
