import React, { useEffect } from 'react';
import { withLayout } from '../layout/Layout';
import {
  CircularProgress,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { useActions, useTypedSelector } from '../hooks';
import classes from './style.module.scss';
import { Loader, PhotoCard } from '../components';
import InfoIcon from '@mui/icons-material/Info';

const Photos = () => {
  const { isLoading, albums, photos, users } = useTypedSelector(
    (state) => state.GalleryState
  );
  const { fetchPhotos, fetchAlbums, fetchUsers } = useActions();

  useEffect(() => {
    fetchPhotos();
    fetchAlbums();
    fetchUsers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.wrapPhotos}>
      {photos.map((item) => (
        <PhotoCard
          key={item.id}
          photo={item}
          user={users.find(
            (user) => user.id === albums.find((el) => el.id === 1)?.userId
          )}
        />
      ))}
    </div>
  );
};

export default withLayout(Photos);
