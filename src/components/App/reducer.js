import { KeyStatus, KeyCodes } from "./constants";

const initialKeysState = Object.entries(KeyCodes).reduce(
  (acc, [_, keyCode]) => ({ ...acc, [keyCode]: KeyStatus.PRISTINE }),
  {}
);
const initialState = {
  keys: initialKeysState,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_KEY_ACTIVE":
      return updateInState(state, action.keyCode, KeyStatus.ACTIVE);
    case "SET_KEY_WORKING":
      return updateInState(state, action.keyCode, KeyStatus.WORKING);
    case "RESET_KEY":
      return updateInState(state, action.keyCode, KeyStatus.RESET);
    case "RESET_PRISTINE":
      return {
        ...state,
        keys: initialKeysState,
      };
    default:
      return state;
  }
}

function updateInState(state, keyCode, status) {
  if (!state.keys[keyCode]) {
    return state;
  } else {
    return {
      ...state,
      keys: {
        ...state.keys,
        [keyCode]: status,
      },
    };
  }
}
