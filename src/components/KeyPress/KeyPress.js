import React from "react";
import { createUseStyles } from "react-jss";

const useKeyPressStyles = createUseStyles({
  keypress: {
    border: "1rem solid pink",
    "font-size": "2rem",
    height: "4rem",
    width: "10rem",
    "text-align": "center",
    "vertical-align": "middle",
    "line-height": "4rem",
    "margin-top": "0.5rem",
  },
});

export function KeyPress({ code, value }) {
  const keyPressClasses = useKeyPressStyles();

  return (
    <React.Fragment>
      <div className={keyPressClasses.keypress}>{code}</div>
      <div className={keyPressClasses.keypress}>{value}</div>
    </React.Fragment>
  );
}
