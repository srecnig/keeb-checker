import React from "react";

export function KeyPress({ code, value }) {
  return (
    <React.Fragment>
      <div className="keypress">{code}</div>
      <div className="keypress">{value}</div>
    </React.Fragment>
  );
}
