import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDetectKeypress, Layouts, resetKeysPristine } from "components/App";
import KeyRow from "components/KeyRow";
import KeyPress from "components/KeyPress";

import "./style.css";

export function KeebChecker() {
  const [code, key] = useDetectKeypress();
  const keys = useSelector((store) => store.keys);
  const dispatch = useDispatch();

  const keyboard = Layouts.ANSI.map((row) =>
    row.map(({ keyCode, size, label }) => ({
      key: keyCode,
      keyCode: keyCode,
      label: label,
      size: size,
      status: keys[keyCode],
    }))
  );

  return (
    <React.Fragment>
      <KeyPress code={code} value={key} />
      <hr />
      {keyboard.map((keys) => (
        <KeyRow key={keys[0].keyCode} keys={keys} />
      ))}
      <hr />
      <button onClick={() => dispatch(resetKeysPristine())}>
        RESET ALL KEYSs
      </button>
    </React.Fragment>
  );
}
