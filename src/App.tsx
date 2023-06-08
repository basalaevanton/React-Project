import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Start from './pages/Start';

const App = function (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </>
  );
};

export default App;
