import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEventListener from "@use-it/event-listener";
import { setKey, resetKey } from "./actions";
import { Ansi } from "./constants";

import "./App.css";

const useDetectKeypress = () => {
  const [keyPress, setKeyPress] = useState([null, null]);
  const dispatch = useDispatch();

  useEventListener("keydown", ({ code, key }) => {
    setKeyPress([code, key]);
  });

  useEventListener("keyup", ({ code, key }) => {
    dispatch(setKey(code));
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

function Key({ code, label, size = 1, status = "pristine" }) {
  const dispatch = useDispatch();
  const className = `key key--${status}`;
  return (
    <div className={className} onClick={() => dispatch(resetKey(code))}>
      {label}
    </div>
  );
}

function App() {
  const [code, key] = useDetectKeypress();
  const keys = useSelector((store) => store.keys);
  const keyboard = Object.entries(keys).map(([code, status]) => ({
    code: code,
    key: code,
    label: Ansi[code],
    status: status,
  }));

  return (
    <div className="App">
      <KeyPress code={code} value={key} />
      <hr />
      {keyboard.map((key) => (
        <Key
          key={key.key}
          code={key.code}
          label={key.label}
          status={key.status}
        />
      ))}
    </div>
  );
}

export default App;
