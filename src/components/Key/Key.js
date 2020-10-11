import React from "react";
import { useDispatch } from "react-redux";
import { resetKey } from "components/App/actions";

import "./style.css";

export function Key({ keyCode, label, size = "1U", status = "pristine" }) {
  const dispatch = useDispatch();
  const className = `key key--${status} element--${convertSizeToClass(size)}`;
  return (
    <div className={className} onClick={() => dispatch(resetKey(keyCode))}>
      {label}
    </div>
  );
}

function convertSizeToClass(size) {
  return size.replace(".", "_");
}
