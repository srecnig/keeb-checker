export function setKeyActive(keyCode) {
  return {
    type: "SET_KEY_ACTIVE",
    keyCode: keyCode,
  };
}

export function setKeyWorking(keyCode) {
  return {
    type: "SET_KEY_WORKING",
    keyCode: keyCode,
  };
}

export function resetKey(keyCode) {
  return {
    type: "RESET_KEY",
    keyCode: keyCode,
  };
}

export function resetKeysPristine() {
  return {
    type: "RESET_PRISTINE",
  };
}
