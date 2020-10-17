import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import { useDetectKeypress, Layouts, resetKeysPristine } from "components/App";
import KeyRow from "components/KeyRow";
import KeyPress from "components/KeyPress";

const useKeebCheckerStyles = createUseStyles({
  row: { display: "flex" },
});

export function KeebChecker() {
  const [code, key] = useDetectKeypress();
  const keys = useSelector((store) => store.keys);
  const dispatch = useDispatch();
  const keebCheckerClasses = useKeebCheckerStyles();

  const keyboard = Layouts.ANSI.map((row, rowIndex) =>
    row.map((element, elementIndex) => {
      switch (element.type) {
        case "Key":
          return {
            type: "Key",
            key: element.keyCode,
            keyCode: element.keyCode,
            label: element.label,
            size: element.size,
            status: keys[element.keyCode],
          };
        case "Spacing":
          return {
            type: "Spacing",
            size: element.size,
            key: `spacing-${rowIndex}-${elementIndex}`,
          };
        default:
          // TODO: throw error object
          throw `Unknown keyboard element: ${element.type}`;
      }
    })
  );

  return (
    <React.Fragment>
      <div className={keebCheckerClasses.row}>
        <textarea></textarea>
        <KeyPress code={code} value={key} />
      </div>
      <hr />
      {keyboard.map((elements) => (
        <KeyRow key={elements[0].key} elements={elements} />
      ))}
      <hr />
      <button onClick={() => dispatch(resetKeysPristine())}>
        RESET ALL KEYSs
      </button>
    </React.Fragment>
  );
}
