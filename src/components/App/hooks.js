import { useState } from "react";
import { useDispatch } from "react-redux";
import useEventListener from "@use-it/event-listener";
import { setKeyActive, setKeyWorking } from "./actions";

export const useDetectKeypress = () => {
  const [keyPress, setKeyPress] = useState([null, null]);
  const dispatch = useDispatch();

  useEventListener(
    "keydown",
    ({ code, key }) => {
      dispatch(setKeyActive(code));
      setKeyPress([code, key]);
    },
    document,
    {}
  );

  useEventListener(
    "keyup",
    ({ code, key }) => {
      dispatch(setKeyWorking(code));
      setKeyPress([null, null]);
    },
    document,
    {}
  );

  return keyPress;
};
