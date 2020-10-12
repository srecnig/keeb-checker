import React from "react";
import { useDispatch } from "react-redux";
import { resetKey } from "components/App/actions";

import "./style.css";

export function Key({ keyCode, label, size = "1U", status = "pristine" }) {
  const dispatch = useDispatch();
  const boxClass = `key element--${convertSizeToClass(size)}`;
  const keyClass = `key__inner key__inner--${status}`;
  return (
    <div className={boxClass} onClick={() => dispatch(resetKey(keyCode))}>
      <div className={keyClass}>{label}</div>
    </div>
  );
}

function convertSizeToClass(size) {
  return size.replace(".", "_");
}
