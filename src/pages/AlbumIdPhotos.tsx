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
import { TUser } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';

const AlbumIdPhotos = () => {
  const { photos, albums, users, isLoading } = useTypedSelector(
    (state) => state.GalleryState
  );

  const { fetchAlbumPhotos } = useActions();
  const params = useParams();
  const router = useNavigate();

  const album = albums.find((el) => el.id === +params.id!);

  useEffect(() => {
    album && fetchAlbumPhotos(album.id);
  }, [album]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Вы открыли страницу альбома {album?.title}</h1>
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
    </div>
  );
};

export default withLayout(AlbumIdPhotos);
