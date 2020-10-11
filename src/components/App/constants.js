export const KeyStatus = Object.freeze({
  ACTIVE: "active",
  PRISTINE: "pristine",
  RESET: "reset",
  WORKING: "working",
});

export const KeyCodes = Object.freeze({
  KeyW: "KeyW",
  KeyA: "KeyA",
  KeyS: "KeyS",
  KeyD: "KeyD",
});

export const Ansi = Object.freeze({
  [KeyCodes.KeyW]: "W",
  [KeyCodes.KeyA]: "A",
  [KeyCodes.KeyS]: "S",
  [KeyCodes.KeyD]: "D",
});
