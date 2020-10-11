import React from "react";
import { useDispatch } from "react-redux";
import { resetKey } from "components/App/actions";

export function Key({ code, label, size = 1, status = "pristine" }) {
  const dispatch = useDispatch();
  const className = `key key--${status}`;
  return (
    <div className={className} onClick={() => dispatch(resetKey(code))}>
      {label}
    </div>
  );
}
