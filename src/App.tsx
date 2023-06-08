import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Photos from './pages/Photos';

const App = function (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Photos />} />
      </Routes>
    </>
  );
};

export default App;
