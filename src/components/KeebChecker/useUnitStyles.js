import { createUseStyles } from "react-jss";

const SUPPORTED_SIZES = [
  0.5,
  0.75,
  1,
  1.25,
  1.5,
  1.75,
  2,
  2.25,
  2.5,
  2.75,
  4,
  6.25,
];

export const useUnitStyles = createUseStyles(() => {
  return SUPPORTED_SIZES.reduce((acc, size) => {
    acc[`element--${String(size).replace(".", "_")}U`] = {
      width: (props) => `${props.baseU * size}rem`,
    };
    return acc;
  }, {});
});

export const convertSizeToClass = (size) => size.replace(".", "_");
