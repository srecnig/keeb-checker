import React from 'react';
import { useState } from 'react';
import useEventListener from '@use-it/event-listener';

import './App.css';

function App() {
  const [code, key] = useKeyDown();

  return (
    <div className="App">OHAI MARK: ({code}, {key})
    </div>
  );
}

const useKeyDown = () => {
  const [keyPress, setKeyPress] = useState(["", ""]);

  useEventListener('keydown', ({ code, key }) => {
    setKeyPress([code, key]);
  });

  return keyPress;
};

export default App;
