import React, { useEffect } from 'react';
import { withLayout } from '../layout/Layout';
import { Typography } from '@mui/material';
import { useActions, useTypedSelector } from '../hooks';

const Start = () => {
  const { albums, photos } = useTypedSelector((state) => state.GalleryState);
  const { fetchAlbums, fetchPhotos } = useActions();

  useEffect(() => {
    fetchAlbums();
    fetchPhotos();
  }, []);
  console.log(albums);
  console.log(photos);
  return (
    <>
      <h1>Start React KIT</h1>
      <div> from Redux</div>
      <Typography variant="h1" component="div">
        Start page
      </Typography>
    </>
  );
};

export default withLayout(Start);
