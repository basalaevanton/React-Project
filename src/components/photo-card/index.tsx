import React from 'react';
import classes from './style.module.scss';
import { TPhotos, TUser } from '../../types/types';
import { useNavigate } from 'react-router-dom';

type TPhotoCardProps = {
  photo: TPhotos;
  user?: TUser;
};

export const PhotoCard = ({ photo, user }: TPhotoCardProps) => {
  const router = useNavigate();
  return (
    <div
      className={classes.card}
      key={photo.id}
      onClick={() => router(`/profile/${user?.id}`)}
    >
      <div className={classes.image}>
        <img
          src={photo.url}
          srcSet={photo.url}
          alt={photo.title}
          loading="lazy"
        />
      </div>
      <div>{user ? user.name : 'Имя автора не известно'}</div>
    </div>
  );
};
