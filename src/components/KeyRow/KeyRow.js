import React from "react";
import Key from "components/Key";

export function KeyRow({ keys }) {
  return (
    <div className="keyboard__row">
      {keys.map((keyProps) => (
        <Key {...keyProps} />
      ))}
    </div>
  );
}
