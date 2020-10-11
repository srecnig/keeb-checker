import React from "react";
import Key from "components/Key";
import Spacing from "components/Spacing";

export function KeyRow({ elements }) {
  return (
    <div className="keyboard__row">
      {elements.map((elementProps) =>
        elementProps.type === "Key" ? (
          <Key {...elementProps} />
        ) : (
          <Spacing {...elementProps} />
        )
      )}
    </div>
  );
}
