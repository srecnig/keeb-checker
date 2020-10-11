import React from "react";

import "./style.css";

export function Spacing({ size = "1U" }) {
  const className = `spacing element--${convertSizeToClass(size)}`;
  return <div className={className}></div>;
}

function convertSizeToClass(size) {
  return size.replace(".", "_");
}
