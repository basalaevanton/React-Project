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

const ProfileId = () => {
  const { albums, users, isLoading } = useTypedSelector(
    (state) => state.GalleryState
  );

  const { fetchUserAlbums } = useActions();
  const params = useParams();
  const router = useNavigate();

  const user = users.find((el) => el.id === +params.id!);

  useEffect(() => {
    user && fetchUserAlbums(user.id);
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Вы открыли страницу автора {user?.name}</h1>
      <div className={classes.wrapPhotos}>
        {albums.map((el) => (
          <div
            className={classes.cardAlbums}
            key={el.id}
            onClick={() => router(`/album/${el.id}`)}
          >
            {el.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withLayout(ProfileId);
