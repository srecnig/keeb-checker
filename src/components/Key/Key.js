import React from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { resetKey } from "components/App/actions";
import {
  useUnitStyles,
  convertSizeToClass,
} from "components/KeebChecker/useUnitStyles";

const useKeyStyles = createUseStyles({
  key: {
    "box-sizing": "border-box",
    height: (props) => `${props.baseU}rem`,
    "text-align": "center",
    "vertical-align": "middle",
    "margin-bottom": (props) => `${0.075 * props.baseU}rem`,
  },
  key__inner: {
    position: "relative",
    top: "0rem",
    border: (props) => `${0.025 * props.baseU}rem solid blue`,
    "border-radius": (props) => `${0.1 * props.baseU}rem`,
    margin: (props) => `${0.05 * props.baseU}rem`,
    "line-height": (props) => `${0.85 * props.baseU}rem`,
    "box-shadow": (props) => `0rem ${0.075 * props.baseU}rem 0rem blue`,
    transition: "All 50ms ease",
  },
  "key__inner--pristine": {
    "background-color": "white",
  },
  "key__inner--reset": {
    "background-color": "lightgray",
  },
  "key__inner--working": {
    "background-color": "lightgreen",
  },
  "key__inner--active": {
    position: "relative",
    top: (props) => `${0.075 * props.baseU}rem`,
    "box-shadow": "none !important",
    transition: "All 50ms ease",
  },
});

export function Key({ keyCode, label, size = "1U", status = "pristine" }) {
  const dispatch = useDispatch();
  const unitClasses = useUnitStyles({ baseU: 4 });
  const keyClasses = useKeyStyles({ baseU: 4 });
  const boxClass = `${keyClasses.key} ${
    unitClasses["element--" + convertSizeToClass(size)]
  }`;
  const keyClass = `${keyClasses.key__inner} ${
    keyClasses["key__inner--" + status]
  }`;

  return (
    <div className={boxClass} onClick={() => dispatch(resetKey(keyCode))}>
      <div className={keyClass}>{label}</div>
    </div>
  );
}
