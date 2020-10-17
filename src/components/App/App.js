import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { KeebChecker } from "components/KeebChecker";
import { reducer } from "./reducer";

const store = createStore(reducer);

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <KeebChecker />
      </div>
    </Provider>
  );
}
