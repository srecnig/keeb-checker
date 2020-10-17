import React from "react";
import { createUseStyles } from "react-jss";
import {
  useUnitStyles,
  convertSizeToClass,
} from "components/KeebChecker/useUnitStyles";

const useSpacingStyles = createUseStyles({
  spacing: {
    height: (props) => `${props.baseU * 0.5}rem`,
  },
});

export function Spacing({ size = "1U" }) {
  const spacingStyles = useSpacingStyles({ baseU: 4 });
  const unitClasses = useUnitStyles({ baseU: 4 });
  const className = `${spacingStyles.spacing} ${
    unitClasses["element--" + convertSizeToClass(size)]
  }`;
  return <div className={className}></div>;
}
