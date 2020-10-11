import { useState } from "react";
import { useDispatch } from "react-redux";
import useEventListener from "@use-it/event-listener";
import { setKey } from "./actions";

export const useDetectKeypress = () => {
  const [keyPress, setKeyPress] = useState([null, null]);
  const dispatch = useDispatch();

  useEventListener("keydown", ({ code, key }) => {
    setKeyPress([code, key]);
  });

  useEventListener("keyup", ({ code, key }) => {
    dispatch(setKey(code));
    setKeyPress([null, null]);
  });

  return keyPress;
};
