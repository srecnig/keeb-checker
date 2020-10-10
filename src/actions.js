export function setKey(keyCode) {
  return {
    type: "SET_KEY",
    keyCode: keyCode,
  };
}

export function resetKey(keyCode) {
  return {
    type: "RESET_KEY",
    keyCode: keyCode,
  };
}
