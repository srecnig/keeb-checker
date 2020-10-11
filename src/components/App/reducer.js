import { KeyStatus, KeyCodes } from "./constants";

const initialState = {
  keys: Object.entries(KeyCodes).reduce(
    (acc, [_, keyCode]) => ({ ...acc, [keyCode]: KeyStatus.PRISTINE }),
    {}
  ),
};

export function reducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case "SET_KEY_ACTIVE":
      return {
        keys: {
          ...state.keys,
          [action.keyCode]: KeyStatus.ACTIVE,
        },
      };
    case "SET_KEY_WORKING":
      return {
        keys: {
          ...state.keys,
          [action.keyCode]: KeyStatus.WORKING,
        },
      };
    case "RESET_KEY":
      return {
        keys: {
          ...state.keys,
          [action.keyCode]: KeyStatus.RESET,
        },
      };
    case "RESET_PRISTINE":
      return initialState;
    default:
      return state;
  }
}
