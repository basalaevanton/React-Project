import React, { useEffect, useRef, useState } from 'react';
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
import { TUser } from '../types/types';

const Photos = () => {
  const { isLoading, albums, photos, users } = useTypedSelector(
    (state) => state.GalleryState
  );
  const { fetchPhotos, fetchAlbums, fetchUsers } = useActions();
  // const [page, setPage] = useState(0);
  // const limit = 30;
  // const parentRef = useRef(null);
  // const childRef = useRef(null);

  useEffect(() => {
    fetchPhotos(0, 100);
    fetchUsers();
    fetchAlbums();
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
      <div style={{ height: 20 }} />
    </div>
  );
};

export default withLayout(Photos);
