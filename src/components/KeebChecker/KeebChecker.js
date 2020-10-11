import React from "react";
import { useSelector } from "react-redux";
import { useDetectKeypress, Ansi } from "components/App";
import Key from "components/Key";
import KeyPress from "components/KeyPress";

import "./style.css";

export function KeebChecker() {
  const [code, key] = useDetectKeypress();
  const keys = useSelector((store) => store.keys);
  const keyboard = Object.entries(keys).map(([code, status]) => ({
    code: code,
    key: code,
    label: Ansi[code],
    status: status,
  }));

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
