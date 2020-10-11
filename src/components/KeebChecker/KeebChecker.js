import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDetectKeypress, Ansi } from "components/App";
import Key from "components/Key";
import KeyPress from "components/KeyPress";

import {  } from "react-redux";
import { resetKeysPristine } from "components/App/actions";

import "./style.css";

export function KeebChecker() {
  const [code, key] = useDetectKeypress();
  const keys = useSelector((store) => store.keys);
  const dispatch = useDispatch()

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
            <hr />
    <button onClick={() => dispatch(resetKeysPristine())}>RESET ALL KEYSs</button>
    </React.Fragment>
  );
}
