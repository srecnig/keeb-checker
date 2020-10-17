import React from "react";
import { createUseStyles } from "react-jss";
import Key from "components/Key";
import Spacing from "components/Spacing";

const useKeyRowStyles = createUseStyles({
  keyboard__row: { display: "flex" },
});

export function KeyRow({ elements }) {
  const keyRowClassses = useKeyRowStyles();

  return (
    <div className={keyRowClassses.keyboard__row}>
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
