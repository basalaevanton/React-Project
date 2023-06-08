import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Photos from './pages/Photos';
import ProfileId from './pages/ProfileId';
import { useActions } from './hooks';
import AlbumIdPhotos from './pages/AlbumIdPhotos';

const App = function (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/profile/:id" element={<ProfileId />} />
        <Route path="/album/:id" element={<AlbumIdPhotos />} />
      </Routes>
    </>
  );
};

export default App;
