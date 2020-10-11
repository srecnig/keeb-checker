import { App } from "./App.js";
import { useDetectKeypress } from "./hooks";
import { KeyCodes, KeyStatus, Ansi } from "./constants";
import { setKeyActive, setKeyWorking, resetKey, resetKeysPristine } from "./actions";

export {
  useDetectKeypress,
  KeyCodes,
  KeyStatus,
  Ansi,
  setKeyActive,
  setKeyWorking,
  resetKey,
  resetKeysPristine,
};
export default App;
